import React from "react"

import { CardCarousel } from "@/components/ui/card-carousel"

export const CardCarouselDemo = () => {
   const images = [
      { src: "/testimonials/vicente.jpg", alt: "Image 1" },
      { src: "/testimonials/sandra.jpg", alt: "Image 2" },
      { src: "/testimonials/glenda.jpg", alt: "Image 3" },
      { src: "/testimonials/fernando.jpg", alt: "Image 4" },
      { src: "/testimonials/daniel.png", alt: "Image 5" }
   ]

   return (
      <div className="w-full">
         <CardCarousel
            images={images}
            autoplayDelay={5000}
            showPagination={true}
            showNavigation={true}
         />
      </div>
   )
}
