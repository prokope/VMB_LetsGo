import { Link } from "react-router-dom"
import Logo from "../assets/vmb_letsgo_white_logo.png"
import {ChevronLeft} from "lucide-react"
import {ChevronRight} from "lucide-react"
import { House } from "lucide-react"
import { HandHeart } from "lucide-react"
import { Goal } from "lucide-react"

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

            <div className={`flex flex-col h-full w-full transition-all duration-200 ${open? "" : "opacity-0" }`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className={"relative flex flex-direction-row h-10 w-full items-center"}>
                    <House className={"ml-4.5 h-5 w-5"} />
                    <Link to="/Test" className={"absolute w-full text-center"}>
                        Home
                    </Link>
                </div>

                <div className={"relative flex flex-direction-row h-10 w-full items-center"}>
                    <HandHeart className={"ml-4.5 h-5 w-5"} />
                    <Link to="/Test" className={"absolute w-full text-center"}>
                        Leads
                    </Link>
                </div>

                <div className={"relative flex flex-direction-row h-10 w-full items-center"}>
                    <Goal className={"ml-4.5 h-5 w-5"} />
                    <Link to="/Test" className={"absolute w-full text-center"}>
                        Metas
                    </Link>
                </div>
            </div>

            
        </aside>
    )
}