import { Dates } from "./Dates"
import { MenuIcon } from "./MenuIcon"

export const Lobby = () => {
    return (
        <div className='w-full transition-transform duration-500'>
            <div className='h-1/5 bg-gray-700'>

            </div>
            <div className='h-4/5 grid grid-cols-9 gap-10 px-6 '>
                <div className='hidden shadow-sm dark:bg-gray-950 shadow-slate-300 bg-white drop-shadow-2xl  col-span-2 h-96 rounded-lg -translate-y-10 lg:flex flex-col gap-5 justify-center items-center text-gray-500 font-medium'>
                    <img src="vite.svg" alt="" className='w-25 h-28' />
                    <p className='font-medium text-xl text-black'>Prabhleen Kaur</p>
                    <p>pb@gmail.com</p>
                    <p>7878984559</p>
                    <p>Delhi, India</p>
                </div>

                <div className=' z-0 col-span-5 lg:col-span-4 h-96 rounded-lg flex flex-col gap-6 justify-between translate-y-10'>
                    <p className='font-medium'>Monday, 16 october</p>
                    <p className='text-2xl font-semibold'>Good Morning Prabhleen</p>

                    <div className='card h-fit dark:bg-gray-950 bg-white rounded-lg drop-shadow-lg  shadow-sm shadow-slate-300 p-5'>
                        <div className='flex justify-between m-auto bg-slate-100 mx-2 p-3 rounded-md dark:bg-gray-800 '>
                            <div className='flex gap-3'>
                                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                </p>
                                <p>Monday, 14 October</p>
                            </div>
                            <div className='flex gap-4'>
                                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                                </svg>
                                </p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                    </svg>

                                </p>
                            </div>
                        </div>
                        <Dates />
                        <Dates />
                        <Dates />
                        <Dates />
                    </div>
                </div>
                <div className='dark:bg-gray-950 bg-white shadow-sm shadow-slate-400 drop-shadow-lg translate-y-36 col-span-4 lg:col-span-3 h-fit pt-10 rounded-lg grid grid-cols-4 pl-14 items-center'>
                    <MenuIcon />
                    <MenuIcon />
                    <MenuIcon />
                </div>
            </div>
        </div>
    )
}