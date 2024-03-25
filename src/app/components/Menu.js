'use client'

import React, { useState } from 'react'
import { cn } from '../../lib/utils'

const Menu = ({ isForum, setIsForum }) => {
    const [menuOpen, setMenuOpen] = useState(true)

    {
        /* <aside
                id='sidebar'
                class='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
                aria-label='Sidebar'
            > */
    }

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div
            className={cn(
                'fixed md:static top-0 left-0 z-40 flex h-screen basis-3/12 max-w-72',
                {
                    'basis-0': !menuOpen,
                }
            )}
        >
            <div
                className={cn(
                    'h-full w-full px-3 py-4 overflow-y-auto bg-sky-950',
                    {
                        'collapse w-0 basis-0 p-0': !menuOpen,
                    }
                )}
            >
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <svg
                            class='w-[48px] h-[48px] text-white'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            width='24'
                            height='24'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z'
                                clip-rule='evenodd'
                            />
                        </svg>
                        <p className='text-lg px-2 text-white'>Hello, User</p>
                    </div>

                    <svg
                        class='w-[42px] h-[42px] text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path d='M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z' />
                    </svg>
                </div>
                <div className='border border-white my-4'></div>
                <ul class='space-y-2 font-medium'>
                    <li>
                        <button
                            onClick={() => setIsForum(true)}
                            class={cn(
                                'flex items-center p-2 w-full text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700',
                                { 'bg-gray-700': isForum }
                            )}
                        >
                            <svg
                                class='flex-shrink-0 w-7 h-7 text-gray-400 transition duration-75  group-hover:text-white'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z'
                                    clip-rule='evenodd'
                                />
                            </svg>

                            <span class='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
                                Disscussion Forum
                            </span>
                            <svg
                                class='w-3 h-3'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 10 6'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='m1 1 4 4 4-4'
                                />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setIsForum(false)}
                            class={cn(
                                'flex items-center justify-start p-2 w-full text-base transition duration-75 rounded-lg group text-white hover:bg-gray-700',
                                { 'bg-gray-700': !isForum }
                            )}
                        >
                            <svg
                                class='flex-shrink-0 w-7 h-7 text-gray-400 transition duration-75  group-hover:text-white'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z'
                                    clip-rule='evenodd'
                                />
                            </svg>

                            <span class='flex-1 ms-3 text-left rtl:text-right whitespace-nowrap'>
                                Market Stories
                            </span>
                        </button>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='flex items-center px-4 py-2  rounded-lg text-white  hover:bg-gray-700 group'
                        >
                            <span class='flex-1 ms-8 whitespace-nowrap'>
                                Sentiment
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='flex items-center px-4 py-2  rounded-lg text-white  hover:bg-gray-700 group'
                        >
                            <span class='flex-1 ms-8 whitespace-nowrap'>
                                Market
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='flex items-center px-4 py-2  rounded-lg text-white  hover:bg-gray-700 group'
                        >
                            <span class='flex-1 ms-8 whitespace-nowrap'>
                                Sector
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='flex items-center px-4 py-2  rounded-lg text-white  hover:bg-gray-700 group'
                        >
                            <span class='flex-1 ms-8 whitespace-nowrap'>
                                Watchlist
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='flex items-center px-4 py-2  rounded-lg text-white  hover:bg-gray-700 group'
                        >
                            <span class='flex-1 ms-8 whitespace-nowrap'>
                                Events
                            </span>
                        </a>
                    </li>
                    <li>
                        <a
                            href='#'
                            class='flex items-center px-4 py-2  rounded-lg text-white  hover:bg-gray-700 group'
                        >
                            <span class='flex-1 ms-8 whitespace-nowrap'>
                                News/Interview
                            </span>
                        </a>
                    </li>
                </ul>
            </div>

            <button
                className='w-[24px] flex items-center md:bg-gray-200 bg-transparent'
                onClick={handleClick}
            >
                <div className='h-24 flex items-center bg-sky-950'>
                    <svg
                        className='w-6 h-6 text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill-rule='evenodd'
                            d='M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z'
                            clip-rule='evenodd'
                        />
                    </svg>
                </div>
            </button>
        </div>
    )
}

export default Menu
