const baseUrl = "https://atsdraft.vercel.app";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/builder"],
        disallow: ["/api/", "/dashboard/", "/account/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}