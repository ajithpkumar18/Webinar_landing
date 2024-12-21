import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './icons/HomeFile'

const useMediaQuery = (val) => {
  const [matches, setMatches] = useState(true);

  useEffect(() => {
    const media = window.matchMedia(val);
    console.log(media);

    if (media.matches !== matches) {
      setMatches(media.matches)
      console.log(matches);

    }

    const listener = () => setMatches(media.matches)
    media.addListener(listener);
    return () => media.removeListener(listener)
  }, [matches, val])
  return matches;
}

function App() {
  const [open, setOpen] = useState(true);
  const isDekstop = useMediaQuery("(min-width:768px)")

  useEffect(() => {
    if (isDekstop == true) {
      setOpen(true);
    }
    else {
      setOpen(false)
    }
  }, [isDekstop])


  return (
    <div className='flex h-screen w-screen bg-white dark:bg-black dark:text-white'>
      <Sidebar open={open} setOpen={setOpen} />
      <Main />
    </div>
  )
}

export default App

function Sidebar({ open, setOpen }) {
  if (open) {

    return (
      <div className='overflow-hidden dark:bg-black shadow-lg z-40 shadow-slate-700 bg-white h-screen w-96 relative transition-transform duration-500'>
        <div className='w-full p-5 flex flex-col gap-5'>
          <button className='bg-blue-900 text-white px-2 py-1 flex rounded-md justify-around items-center gap-1' onClick={() => {
            setOpen(e => !e)
          }}>
            Nav
          </button>
          <button className='bg-blue-900 text-white px-2 py-1 flex rounded-md justify-around items-center gap-1' onClick={() => {
            document.querySelector("html").classList.toggle('dark')
          }}>
            Toggle modes
          </button>
          <div className='flex justify-between mb-6'>
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
              <img src="vite.svg" alt="" />
            </div>
          </div>
          <MenuItem visbility={open} />
          <MenuItem visbility={open} />
          <MenuItem visbility={open} />
          <MenuItem visbility={open} />
        </div>
      </div >
    )
  }
  else {
    return <div className={`${open ? "fixed" : "relative"} left-0 top-0 z-40 bg-white dark:bg-gray-950 dark:text-slate-400 h-screen overflow-hidden w-12  `}>
      <div className='w-full flex flex-col gap-5'>
        <button className='bg-blue-900 text-white px-2 py-1 flex rounded-md justify-around items-center gap-1' onClick={() => {
          setOpen(e => !e)
        }}>
          Nav
        </button>
        <div className='flex justify-between mb-6'>
          <div>
            <img src="vite.svg" alt="" />
          </div>
        </div>
        <MenuItem visbility={open} />
        <MenuItem visbility={open} />
        <MenuItem visbility={open} />
        <MenuItem visbility={open} />
      </div>
    </div>
  }
}

function Main() {
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

function Dates() {
  return (
    <>
      <div className='flex w-full my-2'>
        <div className='p-3 border-r-2 border-cyan-200'>
          <p className='text-xl font-medium'>11:30am</p>
          <p className='text-xs'>11:30am</p>
        </div>
        <div className='p-3 pt-4'>
          <p className='text-xs'>live</p>
          <p className='text-xl font-medium'>UX Webinar</p>
        </div>
      </div>
      <hr className='dark:bg-gray-800' />
    </>
  )
}

function MenuIcon() {
  return (
    <div className=' w-fit h-28 col-span-2'>
      <p className='bg-cyan-500 w-12 rounded-lg h-12 mx-auto flex justify-center items-center mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
          <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
        </svg>

      </p>
      <p className='font-medium text-sm'>Schedule a webinar</p>
    </div>
  )
}

function MenuItem({ visbility }) {
  return (
    <div className='w-full flex justify-between p-2 py-3 hover:bg-slate-200 rounded-md text-slate-500 font-medium hover:text-black'>
      <p className={`${visbility ? "block" : "hidden"}`}>Home</p>
      <span><Home /></span>
    </div>
  )
}

{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg> */}
