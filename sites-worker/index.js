function preventIndexing(response) {
  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !['GET', 'HEAD'].includes(request.method)) {
      return preventIndexing(response);
    }

    const url = new URL(request.url);
    const cleanPath = url.pathname === '/' ? '/index' : url.pathname.replace(/\/$/, '');

    if (!cleanPath.split('/').pop()?.includes('.')) {
      url.pathname = `${cleanPath}.html`;
      const htmlResponse = await env.ASSETS.fetch(new Request(url, request));
      if (htmlResponse.status !== 404) return preventIndexing(htmlResponse);
    }

    url.pathname = '/404.html';
    const notFound = await env.ASSETS.fetch(new Request(url, request));
    return preventIndexing(new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    }));
  },
};
