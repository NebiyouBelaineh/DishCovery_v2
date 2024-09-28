"use client"

import { Recipe } from "@/lib/types"

interface Props {
  recipes: Recipe[];
  index?: number
  category: string;
}

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { RecipeDialog } from "./RecipeDialog"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselRecipe(props: Props) {
  const { recipes, category } = props;
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
    <Carousel className="w-[80%] mx-auto border border-gray-200 dark:border-gray-600 rounded-xl">
      <CarouselContent ref={emblaRef}>
        {recipes.map((recipe: Recipe, index: number) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <div className="">
              <Card className="w-full h-full">
                <CardContent className="flex items-center justify-center p-2 lg:p-4">
                    {/* <Image src={recipe.recipe.image} alt={recipe.recipe.label} width={300} height={300}/> */}
                    {/* <Image src="/images/sample-img.jpg" alt="sample" width={300} height={300}
                      className="w-full h-full object-cover rounded-lg md:rounded-xl" /> */}
                    <RecipeDialog recipe={recipe} category={category} />
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