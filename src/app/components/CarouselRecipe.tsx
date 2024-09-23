"use client"

interface Recipe {
  recipe: {
    image: string;
    label: string;
  }
}
interface Props {
  recipes: Recipe[];
  index?: number
}

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Component(props: Props) {
  const { recipes } = props;
  // console.log('recipes', recipes);
  // console.log('recipes title', recipes[0].recipe.label);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  })

  React.useEffect(() => {
    if (emblaApi) {
      // console.log(emblaApi.slideNodes()) // log slides to console
    }
  }, [emblaApi])

  return (
    <Carousel className="w-full max-w-sm mx-auto">
      <CarouselContent ref={emblaRef}>
        {recipes.map((recipe: Recipe, index: number) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
            <div className="p-1">
              <Card className="w-[300px] h-[300px]">
                <CardContent className="flex items-center justify-center p-6">
                  <div className="relative w-[300px] h-[300px]">
                    <Image src={recipe.recipe.image} alt={recipe.recipe.label} layout="fill" objectFit="cover" />
                  </div>
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