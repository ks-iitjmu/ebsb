"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  gradientClass: string;
  placeholderText: string;
}

export default function ImageCard({
  src,
  alt,
  title,
  description,
  gradientClass,
  placeholderText,
}: ImageCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className={`h-32 ${gradientClass} flex items-center justify-center`}>
        {!imageError ? (
          <Image
            src={src}
            alt={alt}
            width={200}
            height={128}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="text-[#1d3261] text-center">
            <svg
              className="w-8 h-8 mx-auto mb-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
            <span className="text-xs">{placeholderText}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#1d3261] mb-2">{title}</h3>
        <p className="text-sm text-[#1d3261]">{description}</p>
      </div>
    </div>
  );
}
