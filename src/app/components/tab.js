import React from 'react'

import { cn } from '@/lib/utils'

const tab = ({ isForum, setIsForum }) => {
    return (
        <div className='w-full md:invisible md:h-0'>
            <ul class='flex  w-full text-sm font-medium text-center border-gray-700 text-white'>
                <li class='w-full basis-1/2'>
                    <button
                        onClick={() => setIsForum(true)}
                        className={cn(
                            'w-full inline-block p-4   bg-sky-950 text-white  hover:text-blue-500',
                            { 'border-b-2 border-red-600 bg-gray-800': isForum }
                        )}
                    >
                        Disscussion Forum
                    </button>
                </li>
                <li class='w-full basis-1/2'>
                    <button
                        onClick={() => setIsForum(false)}
                        class={cn(
                            'w-full inline-block p-4   bg-sky-950 text-white  hover:text-blue-500',
                            {
                                'border-b-2 border-red-600 bg-gray-800':
                                    !isForum,
                            }
                        )}
                    >
                        Market Stories
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default tab
