import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from './DialogProvider';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Recipe } from '@/lib/types';

export function RecipeDialog({ recipe, category }: { recipe: Recipe, category: string }) {
  return (
    <Dialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
      >
        <DialogImage
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
          className='h-48 w-full object-cover'
        />
        <div className='flex flex-grow flex-row items-start justify-between p-2 h-[100px]'>
          <div>
            <DialogTitle className='text-zinc-950 dark:text-zinc-50 font-semibold text-lg text-center'>
              {recipe.recipe.label}
            </DialogTitle>
            {/* <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              {recipe.recipe.category}
            </DialogSubtitle> */}
          </div>
          <button
            type='button'
            className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
            aria-label='Open dialog'
          >
            <SquareArrowOutUpRight size={14} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-[70%] flex-col justify-center overflow-hidden border-2 border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[350px]'
        >
          <DialogImage
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
            className='h-full w-full object-cover rounded-lg md:rounded-xl'
          />
          <div className='p-6'>
            <DialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
              {recipe.recipe.label}
            </DialogTitle>
            <DialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              {recipe.recipe.category}
            </DialogSubtitle>
            <DialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              {recipe.recipe.ingredientLines.map((ingredient: string, index: number) => (
                <p key={index} className='text-zinc-700 dark:text-zinc-400'>
                  <span>{ingredient}</span>
                </p>
              ))}
            </DialogDescription>
          </div>
          <DialogClose className='text-zinc-50' />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  );
}
