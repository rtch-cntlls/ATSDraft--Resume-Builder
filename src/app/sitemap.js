const baseUrl = "https://atsdraft.vercel.app";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/builder`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}