import { Home } from "../icons/HomeFile"

export const MenuItem = ({ visbility }) => {
    return (
        <div className='w-full flex justify-between p-2 py-3 hover:bg-slate-200 rounded-md text-slate-500 font-medium hover:text-black'>
            <p className={`${visbility ? "block" : "hidden"}`}>Home</p>
            <span><Home /></span>
        </div>
    )
}