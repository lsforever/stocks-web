import React from 'react'
import Image from 'next/image'

const story = () => {
    return (
        <div>
            <div className='w-full bg-white border border-gray-200 rounded-lg shadow mb-2'>
                <a href='#'>
                    <Image
                        className='rounded-t-lg w-full'
                        src='https://source.unsplash.com/random/400x200/?sunset'
                        alt=''
                        width={400}
                        height={200}
                    />
                </a>
                <div className='p-5'>
                    <a href='#'>
                        <h5 className='mb-1 text-base font-bold tracking-tight text-gray-900'>
                            The Coldest Sunset
                        </h5>
                    </a>
                    <p className='mb-1 text-sm font-normal text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore ea velit ab nobis et. Voluptatem nemo facilis,
                        repudiandae eos mollitia.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default story
