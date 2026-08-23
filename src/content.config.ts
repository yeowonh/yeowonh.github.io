import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Portfolio entries. src/content/projects/*.md -> /projects/<filename>
 */
const createProjectsCollection = (base: string) => defineCollection({
  loader: glob({ pattern: '**/*.md', base }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One-line summary for the card and meta description */
      summary: z.string(),
      /** Grid label + filter group, e.g. 'NLP Research' */
      category: z.string(),
      /** '2025' or 'Aug 2024 to Apr 2025' */
      period: z.string(),
      /** Team size and what you owned */
      role: z.string().optional(),
      /** Organization, employer, school, or project team behind the work */
      organization: z.string().optional(),
      stack: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),

      /**
       * Thumbnail image. Drop the file in src/assets/projects/ and reference it
       * relatively:
       *   cover: '../../assets/projects/hello-world.png'
       * Astro resizes it and converts it to WebP at build time. With no cover,
       * the gradient placeholder below is used instead.
       */
      cover: image().optional(),
      coverAlt: z.string().optional(),

      /** Placeholder gradient used when there is no cover */
      tint: z.enum(['tint-1', 'tint-2', 'tint-3']).default('tint-1'),
      /** Short mark shown on the placeholder */
      mark: z.string().default(''),

      featured: z.boolean().default(false),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const projects = createProjectsCollection('./src/content/projects');
const projectsKo = createProjectsCollection('./src/content/projects-ko');

export const collections = { projects, projectsKo };
