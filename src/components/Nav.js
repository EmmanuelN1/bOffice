import MenuOutlined from "@material-ui/icons/MenuOutlined";
import logo from "../assets/logo.png"
import Image from "next/image"
function Nav() {
    return (
        <div>
            <nav className="container flex items-center mt-4 py-4 sm:mt-12">
                <div className="py-1">
                    <Image 
                     src={logo} 
                     width={160}
                     height={60}
                     objectFit="contain"
                     className="cursor-pointer"
                     alt=""/>
                </div>

                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-b-black uppercase text-xs">
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">Contact</li>
                        <button type="button" className="primary text-white rounded-md px-7 py-3 uppercase">Sign In</button>
                </ul>

                <div className="flex sm:hidden flex-1 justify-end mr-5">
                        <MenuOutlined/>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
