import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const updates = defineCollection({
 loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
 schema: z.object({ title: z.string(), date: z.coerce.date(), summary: z.string(), draft: z.boolean().default(false), youtubeId: z.string().regex(/^[A-Za-z0-9_-]{11}$/).optional() })
});
export const collections = { updates };
