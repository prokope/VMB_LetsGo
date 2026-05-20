import Logo from "../assets/vmb_letsgo_white_logo.png"
import {ChevronLeft} from "lucide-react"
import {ChevronRight} from "lucide-react"

export default function Sidebar ({ open, setOpen }) {

    console.log(open)
    return (
        <aside className={`
            flex
            flex-col
            h-screen
            bg-zinc-900
            text-white p-6
            transition-normal
            duration-300
            ${open ? "w-48" : "w-13"}`}>

            {/* Toggle Button */}
            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                <ChevronLeft className={`${open ? "ml-[80%]" : "hidden"} transition-all duration-500`} />
            </button>

            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
                <ChevronRight className={`${open ? "hidden" : ""} transition-all duration-500`} />
            </button>

            {/* Logo */}
            <img className="mt-4 h-8.75 w-[95%] pr-1" src={Logo} alt="Project Logo"/>

        </aside>
    )
}