import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    readTime: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
  }),
});

export const collections = { articles };
