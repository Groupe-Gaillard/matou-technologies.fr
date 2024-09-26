import { z, defineCollection } from "astro:content";

const recruitmentCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.coerce.date(),
    author: z.string().default("Matou"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.coerce.date(),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  recruitment: recruitmentCollection,
  team: teamCollection,
  blog: blogCollection,
};
