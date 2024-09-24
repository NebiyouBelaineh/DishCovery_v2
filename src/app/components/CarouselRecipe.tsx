"use client"

import { Recipe } from "@/lib/types"

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

export default function CarouselRecipe(props: Props) {
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
    <Carousel className="w-full mx-auto">
      <CarouselContent ref={emblaRef}>
        {recipes.map((recipe: Recipe, index: number) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5">
            <div className="p-1">
              <Card className="w-[300px] h-[300px]">
                <CardContent className="flex items-center justify-center p-2 lg:p-4">
                  <div className="relative w-[300px] h-[300px]">
                    <Image src={recipe.recipe.image} alt={recipe.recipe.label} width={300} height={300}/>
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