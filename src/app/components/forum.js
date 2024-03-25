import React from 'react'

import Post from './post'
import { cn } from '@/lib/utils'

const forum = ({ isForum, setIsForum }) => {
    return (
        <div
            className={cn(
                'h-full overflow-y-auto no-scrollbar md:visible md:grow md:basis-6/12 px-2',
                { 'collapse basis-0 w-0 grow-0': !isForum }
            )}
        >
            <h1 className='w-max ml-1 p-1 m-2 font-extrabold text-xl text-red-500 bg-gray-300'>
                DISSCUSSION FORUM
            </h1>
            <div className='flex flex-col'>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default forum
