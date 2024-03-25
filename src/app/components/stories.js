import React from 'react'

import Story from './story'
import { cn } from '@/lib/utils'

const stories = ({ isForum, setIsForum }) => {
    return (
        <div
            className={cn(
                'h-full w-full basis-auto  overflow-y-auto no-scrollbar md:visible md:basis-4/12 min-w-36 md:max-w-[400px] px-2 grow-1 md:grow-0',
                {
                    'invisible basis-0 w-0 grow-0 min-w-0': isForum,
                }
            )}
        >
            <h1 className='w-max ml-1 p-1 m-2 font-extrabold text-red-500 bg-gray-300'>
                MARKET STORIES
            </h1>
            <div className='flex flex-col'>
                <Story />
                <Story />
                <Story />
                <Story />
            </div>
        </div>
    )
}

export default stories
