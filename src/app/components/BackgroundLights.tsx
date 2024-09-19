import { twMerge } from 'tailwind-merge'
import { Lights } from './Lights'
import Link from 'next/link'
import GetStartedButton from './GetStartedBtn'

export const BackgroundLights = () => {
    return (
        <div className='flex h-screen'> {/* Added h-screen */}
            <span className="bg-black w-full h-full block">
                <div className={'w-full h-full relative bg-grid-white/[0.03] px-4 flex items-center justify-center'}>
                    <div
                        className={
                            'w-full max-w-3xl flex flex-col sm:items-center items-start justify-center relative z-[1] animate-moveUp'
                        }
                    >
                        {/* <div className="hidden sm: flex relative w-full">
                            <div className="bg-gradient-to-br from-green-950/[0.8] to-blue-950/[0.7] border border-green-900 rounded-lg p-1 aspect-square overflow-hidden absolute left-0 sm:left-1/2 sm:-translate-x-1/2 -top-12">
                                <span
                                    className={twMerge(
                                        'text-xl',
                                        'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-yellow-400 '
                                    )}
                                >
                                    ✨
                                </span>
                            </div>
                        </div> */}
                        <div className='flex flex-col justify-center'>
                            <h1
                                className={
                                    'text-transparent sm:text-center font-bold sm:text-5xl text-4xl md:text-6xl mb-4 bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-black/[0.6]'
                                }
                            >
                                Welcome to <span className={twMerge(
                                    'text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-yellow-400 '
                                )}>DishCovery</span>.
                            </h1>
                            <p className="text-white/[0.7] sm:text-center text-lg md:text-xl">
                                Discover and save your favorite recipes!
                            </p>
                        </div>
                        <div className="mt-5 w-full flex max-sm:flex-col justify-center items-center sm:gap-10 gap-4 text-white">
                            {/* <Link href="/recipes" className="group h-10 sm:h-8 w-full sm:w-36 bg-gradient-to-br from-green-950 to-blue-950 border border-green-900 rounded-lg flex items-center justify-center gap-1.5 hover:scale-105 transition-all">
                                <span>Get Started</span>
                                <span className="">&rarr;</span>
                            </Link > */}
                            <GetStartedButton text="Get Started" />
                            <Link href="/about" className="h-8 flex items-center justify-center underline text-white  hover:text-gray-300">
                                <span>About us</span>
                            </Link>
                        </div>
                    </div>
                    <div className={'absolute bottom-0 left-0 w-full h-full z-0 animate-appear opacity-0'}>
                        <Lights />
                    </div>
                </div>
            </span>
        </div>
    )
}
