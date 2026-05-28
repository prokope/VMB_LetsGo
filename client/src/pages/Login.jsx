import { useState } from "react"
import {useNavigate} from "react-router-dom"
import background from "../assets/background.png"
import logo_black from "../assets/vmb_letsgo_black_logo.png"
import emailIcon from "../assets/email_icon.png"
import passwordIcon from "../assets/password_icon.png"

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
        });

        const data = await res.text();
        console.log(data);
    } 

    return (
        <div className="bg-zinc-100 bg-cover h-screen" style={{ backgroundImage: `url(${background})` }}>

            <div className="bg-gradient-to-r from-gray-800/10 to-zinc-300/30 h-screen flex items-center justify-center lg:justify-start lg:pl-24">
                <div>
                    <img className="mb-3" src={logo_black} alt="Project Logo"/>

                    <div className="bg-gradient-to-r from-gray-500/20 to-zinc-200/30 sm:w-[500px] h-[400px] rounded-3xl shadow-xl">
                        <form onSubmit={handleSubmit} id="loginForm" className="bg-gray-300/0 flex items-center h-full gap-3 flex-col pt-[15%]" id="loginForm">
                            <div className="w-[85%] flex items-center">
                                <img className="w-6 h-4" src={emailIcon} alt="Email Icon"/>
                                <input className="w-full ml-3"
                                id="email"
                                type="e-mail"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)
                                }/>
                            </div>

                            <div className="w-[85%] flex items-center mt-8">
                                <img className="w-6 h-6" src={passwordIcon} alt="Password Icon"/>
                                <input className="w-full ml-3"
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>

                            <button type="submit" className="bg-zinc-800 text-blue-400 cursor-pointer hover:bg-blue-500/50 hover:text-zinc-800 transition mt-20 rounded-xl w-[35%] h-10">Login</button>

                        </form>
                    </div>
                </div>
            </div>    
        </div>
    )
}