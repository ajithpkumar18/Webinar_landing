import { Home } from "../icons/HomeFile"

export const MenuItem = ({ visbility, name, children }) => {
    return (
        <div className={`w-full flex justify-between p-2 py-2  rounded-md text-slate-500 font-medium  ${document.querySelector("body").classList.contains("dark") ? "hover:border-white" : "hover:bg-slate-300"} hover:text-black dark:text-slate-300`}>
            <p className={`${visbility ? "block" : "hidden"}`}>{name.charAt(0).toUpperCase() + name.slice(1, name.length)}</p>
            <span>{
                children
            }</span>
        </div>
    )
}