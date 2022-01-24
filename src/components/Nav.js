import MenuOutlined from "@material-ui/icons/MenuOutlined";
import logo from "../assets/logo.png"
import Image from "next/image"
import Link from "next/link"
function Nav() {
    return (
        <div>
            <nav className="container flex items-center mt-1 py-2 sm:mt-12">
                <div className="py-1 ">
                    <Image 
                     src={logo} 
                     width={160}
                     height={60}
                     objectFit="contain"
                     className="cursor-pointer"
                     alt=""/>
                </div>

                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-b-black capitalize text-s">
                        <Link href="/"         className="cursor-pointer">Home</Link>
                        <Link href="/about"         className="cursor-pointer">About</Link>
                        <Link href="/faq"    className="cursor-pointer">FAQ
                        </Link>
                        <Link  href="/contact" className="cursor-pointer">Contact Us
                        </Link>

                        <button type="button" className="bg-blue-600 text-white rounded-md px-7 py-3 uppercase md:mr-3">Sign Up</button>
                </ul>

                <div className="flex sm:hidden flex-1 justify-end mr-5">
                        <MenuOutlined/>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
