import React from 'react'

import Image from 'next/image'

const post = () => {
    return (
        <div>
            <div className='flex mb-4 w-full p-3 bg-white border border-gray-200 rounded-lg shadow'>
                <div className='flex-shrink-0'>
                    <Image
                        className='w-8 h-8 md:w-12 md:h-12 rounded-full md:ml-2'
                        src='https://source.unsplash.com/side-view-of-female-office-worker-smiling-and-talking-while-working-with-digital-tablet-in-office-room-b4Y7W43Uxs8/300x300/'
                        alt=''
                        width={300}
                        height={300}
                    />
                </div>

                <div className='flex grow shrink flex-col px-4'>
                    <div className='flex items-center'>
                        <p className='text-lg font-semibold text-gray-900'>
                            Lorem Ipsum
                        </p>
                        <span className='ms-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-0.5 text-center'>
                            Sector 2
                        </span>
                    </div>
                    <p className='text-sm font-normal my-2 text-gray-900'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, molestias beatae quibusdam atque illo
                        praesentium vitae odit, saepe sunt.
                    </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <svg
                                className='w-6 h-6 text-gray-800'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z'
                                />
                            </svg>
                            <p className='ml-1 text-sm font-semibold text-gray-900'>
                                2k
                            </p>
                        </div>

                        <div className='flex items-center'>
                            <svg
                                className='w-6 h-6 text-gray-800'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-width='2'
                                    d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
                                />
                                <path
                                    stroke='currentColor'
                                    stroke-width='2'
                                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                                />
                            </svg>

                            <p className='ml-1 text-sm font-semibold text-gray-900'>
                                2k
                            </p>
                        </div>

                        <div className='flex items-center'>
                            <svg
                                className='w-6 h-6 text-gray-800'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z'
                                />
                            </svg>

                            <p className='ml-1 text-sm font-semibold text-gray-900'>
                                comments
                            </p>
                        </div>

                        <div className='flex items-center'>
                            <svg
                                className='w-6 h-6 text-gray-800'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-width='2'
                                    d='M7.926 10.898 15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
                                />
                            </svg>

                            <p className='ml-1 text-sm font-semibold text-gray-900'>
                                share
                            </p>
                        </div>
                    </div>
                </div>
                <p className='shrink-0 text-xs text-blue-400'>2 min ago</p>
            </div>
        </div>
    )
}

export default post
