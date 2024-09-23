"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Component(recipes: [string]) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  })

  React.useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // log slides to console
    }
  }, [emblaApi])

  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent ref={emblaRef}>
        {Array.from({ length: 6 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}