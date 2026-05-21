import { Link } from "react-router-dom"
import Logo from "../assets/vmb_letsgo_white_logo.png"
import {ChevronLeft} from "lucide-react"
import {ChevronRight} from "lucide-react"

export default function Sidebar ({ open, pinned, setPinned, setHovered }) {

    console.log(open)
    return (
        <aside className={`
            flex
            flex-col
            items-center
            h-screen
            bg-zinc-900
            text-white 
            transition-normal
            duration-300
            ${open ? "w-48" : "w-13"}`}
            >
            
            
            <div className="flex justify-center items-center mt-3 p-6">
                {/* Logo */}
                <img className={`h-8.75 w-[95%] transition-all duration-300 ${open ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`} src={Logo} alt="Project Logo"/>

                {/* Toggle Button */}
                <button className="cursor-pointer" onClick={() => setPinned(!pinned)}>
                    {pinned? <ChevronLeft className={"transition-all duration-500"}/>: <ChevronRight className={"transition-all duration-500"}/>}
                </button>
            </div>

            <div className={"h-full w-full"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <Link to="/Test">
                    
                </Link>
            </div>
        </aside>
    )
}