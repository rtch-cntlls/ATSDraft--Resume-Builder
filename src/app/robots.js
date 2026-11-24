const baseUrl = "https://atsdraft.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/builder"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}