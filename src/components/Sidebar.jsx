import { useState } from "react"
import { CloseNav } from "../icons/CloseNav"
import { DarkMode } from "../icons/Darkmode"
import { LightMode } from "../icons/LightMode"
import { MenuItem } from "./MenuItem"
import { OpenNav } from "../icons/OpenNav"
import { Home } from "../icons/HomeFile"
import { ContactIcon } from "../icons/ContactIcon"
import { AboutIcon } from "../icons/AboutIcon"

export const Sidebar = ({ open, setOpen }) => {
    const [isDark, setDark] = useState(document.querySelector('html').classList.contains('dark'))

    const setMode = () => {
        document.querySelector("html").classList.toggle('dark')
        setDark(!isDark)
    }
    if (open) {

        return (
            <div className='overflow-hidden dark:bg-black shadow-lg z-40 shadow-slate-700 bg-white h-screen w-96 relative transition-transform duration-500'>
                <div className='w-full p-5 flex flex-col gap-5'>
                    <div className={` ${isDark ? "text-white" : "text-slate-950 "} px-2 py-1 flex rounded-md justify-end text-sm items-center gap-1`} >
                        <CloseNav onclick={() => {
                            setOpen(e => !e)
                        }} />
                    </div>

                    <div className={`${isDark ? "text-slate-300" : "text-slate-600"} font-semibold  w-full px-2 py-1 flex rounded-md justify-between items-center gap-1`} >
                        {isDark ? 'Dark' : 'Light'} Mode
                        {isDark ? <LightMode onclick={setMode} /> : <DarkMode onclick={setMode} />
                        }
                    </div>



                    <div className='flex justify-between mb-8 dark:text-slate-300'>
                        <button className='bg-blue-900 text-white px-2 py-1 flex rounded-md justify-around items-center gap-1'>
                            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z" clip-rule="evenodd" />
                            </svg>
                            </p>
                            <p className='text-sm'>
                                Webinar
                            </p>
                        </button>
                        <div>
                            <img src="vite.svg" alt="" className="pr-1" />
                        </div>
                    </div>
                    <MenuItem visbility={open} name={"home"} children={<Home />} />
                    <MenuItem visbility={open} name={"contact us"} children={<ContactIcon />} />
                    <MenuItem visbility={open} name={"about us"} children={<AboutIcon />} />
                    <MenuItem visbility={open} name={"home"} children={<ContactIcon />} />
                </div>
            </div >
        )
    }
    else {
        return <div className={`${open ? "fixed" : "relative"} left-0 top-0 z-40 bg-white dark:bg-gray-950 dark:text-slate-400 h-screen overflow-hidden w-12  `}>
            <div className='w-full flex flex-col gap-5'>
                <div className={` ${isDark ? "text-white" : "text-slate-950 "} px-2 py-1 flex rounded-md justify-around items-center`}>
                    <OpenNav onclick={() => { setOpen(e => !e) }} />
                </div>
                <div className={`${isDark ? "text-white" : "text-slate-600"} font-semibold  w-full px-2 py-1 flex rounded-md justify-between items-center gap-1`} >
                    {isDark ? <LightMode onclick={setMode} /> : <DarkMode onclick={setMode} />
                    }
                </div>
                <div className='flex justify-center mb-6 pr-1'>
                    <div>
                        <img src="vite.svg" alt="" />
                    </div>
                </div>
                <MenuItem visbility={open} name={"home"} children={<Home />} />
                <MenuItem visbility={open} name={"contact us"} children={<ContactIcon />} />
                <MenuItem visbility={open} name={"about us"} children={<AboutIcon />} />
                <MenuItem visbility={open} name={"home"} children={<ContactIcon />} />
            </div>
        </div>
    }
}