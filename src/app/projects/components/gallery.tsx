"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import GlassPane from "@/app/components/ui/glasspane";
import EmptyGallery from "@/app/components/ui/emptyGallery";

interface ImageItem {
	src: string;
	alt: string;
}

interface GalleryProps {
	images: ImageItem[]; // Array of image objects
}

export default function Gallery({ images }: GalleryProps) {
	return (
		<div className="scroll-mt-25 mt-10" id="gallery">
			<h3 className="text-2xl font-semibold mb-4 px-2 lg:px-0">Gallery</h3>
			{/* Project Images */}
			<GlassPane className="p-5 mb-5 rounded-3xl">
				{images.length > 0 ? (
					// <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					//    {images.map((image, index) => (
					//       <div key={index} className="relative w-full h-58 rounded-lg overflow-hidden">
					//          <Image
					//             src={image.src}
					//             alt={image.alt}
					//             layout="fill"
					//             objectFit="cover"
					//          />
					//       </div>
					//    ))}
					// </div>
					<Swiper
						modules={[Navigation, Pagination, Autoplay]}
						navigation
                  loop={true}
						pagination={{ clickable: true }}
						autoplay={{ delay: 4000 }}
						className="w-full mx-auto rounded-xl overflow-hidden " // Optional tailwind structural wraps
					>
						{images.map((image, index) => (
							<SwiperSlide key={index}>
								{/* 1. This wrapper tells the Next.js image how big to expand */}
								<div className="relative w-full aspect-[20/9]">
									<Image
										src={image.src}
										alt={image.alt || `Slide ${index}`}
										fill // Modern equivalent of layout="fill"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
										priority={index === 0} // Speeds up loading the first image
										className="object-cover" // Modern equivalent of objectFit="cover"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<EmptyGallery/>
				)}
			</GlassPane>
		</div>
	);
}
