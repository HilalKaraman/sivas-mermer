import type { MetadataRoute } from "next";
import { products } from "../data/products";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://sivasmermer.com.tr";

    // Only generate URLs for products
    const allItems = [...products];

    // Generate dynamic URLs
    const dynamicUrls = allItems.map((item) => ({
        url: `${baseUrl}/${item.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/hakkimizda`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/urunler`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...dynamicUrls,
    ];
}
