import type { MetadataRoute } from "next";
import { products } from "../data/products";

export default function sitemap(): MetadataRoute.Sitemap {
    const productUrls = products.map((product) => ({
        url: `https://sivasmermer.com/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: "https://sivasmermer.com",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: "https://sivasmermer.com/hakkimizda",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: "https://sivasmermer.com/urunler", // If this page exists, otherwise maybe remove or point to homepage
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: "https://sivasmermer.com/iletisim",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...productUrls,
    ];
}
