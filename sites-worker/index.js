export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !['GET', 'HEAD'].includes(request.method)) return response;

    const url = new URL(request.url);
    const cleanPath = url.pathname === '/' ? '/index' : url.pathname.replace(/\/$/, '');

    if (!cleanPath.split('/').pop()?.includes('.')) {
      url.pathname = `${cleanPath}.html`;
      const htmlResponse = await env.ASSETS.fetch(new Request(url, request));
      if (htmlResponse.status !== 404) return htmlResponse;
    }

    url.pathname = '/404.html';
    const notFound = await env.ASSETS.fetch(new Request(url, request));
    return new Response(notFound.body, {
      status: 404,
      headers: notFound.headers,
    });
  },
};
