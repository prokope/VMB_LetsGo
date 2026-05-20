import { useState } from "react"

import Sidebar from "../components/Sidebar"

export default function Layout ({ children }) {

    const [open, setOpen] = useState(true)

    return (
    
    <div className="flex">

      <Sidebar open={open} setOpen={setOpen} />

      <main className="flex-1">

        {children}

      </main>

    </div>

    )
}