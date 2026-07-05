import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.prometech.com.pe",
      lastModified:"2026-07-05",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}