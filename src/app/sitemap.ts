import type { MetadataRoute } from "next";
import { products, categories } from "../data/products";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://sivasmermer.com";

    // Ürün malzemeleri (traverten, granit vb.)
    const productUrls = products.map((item) => ({
        url: `${baseUrl}/${item.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    // Koleksiyon sayfaları (mezar-tasi, tezgah, cesme vb.)
    const collectionUrls = categories.map((item) => ({
        url: `${baseUrl}/${item.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
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
        {
            url: `${baseUrl}/projeler`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...collectionUrls,
        ...productUrls,
    ];
}
