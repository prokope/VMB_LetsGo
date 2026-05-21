import { useState } from "react"

import Sidebar from "../components/Sidebar"

export default function Layout ({ children }) {

    const [pinned, setPinned] = useState(false)
    const [hovered, setHovered] = useState(false)
    const open = pinned || hovered

    return (
    
    <div className="flex">

      <Sidebar 
      open={open}
      pinned={pinned}
      setPinned={setPinned}
      setHovered={setHovered}
      />

      <main className="flex-1">

        {children}

      </main>

    </div>

    )
}