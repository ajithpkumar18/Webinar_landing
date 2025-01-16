import { useEffect, useState } from 'react'
import './App.css'
import { Home } from './icons/HomeFile'
import { DarkMode } from './icons/Darkmode';
import { LightMode } from './icons/LightMode';
import { CloseNav } from './icons/CloseNav';
import { OpenNav } from './icons/OpenNav';
import { Sidebar } from './components/Sidebar';
import { Lobby } from './components/Lobby';

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
      <Lobby />
    </div>
  )
}

export default App











{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg> */}
