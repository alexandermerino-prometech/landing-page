import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllSlugs().map((slug) => ({
    url: `https://www.prometech.com.pe/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.prometech.com.pe",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.prometech.com.pe/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Agrega automáticamente todos los artículos
    ...posts,
  ];
}