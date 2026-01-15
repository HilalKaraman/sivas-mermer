"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ProductImageProps extends ImageProps {
    className?: string; // Explicitly include className in the interface
}

export default function ProductImage({ className, ...props }: ProductImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Image
            {...props}
            className={`
                duration-700 ease-in-out
                ${isLoading ? "scale-110 blur-xl grayscale" : "scale-100 blur-0 grayscale-0"}
                ${className || ""}
            `}
            onLoad={() => setIsLoading(false)}
        />
    );
}
