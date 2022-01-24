import Image from "next/image";
import logo from "../assets/logo.png"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter";
function Footer() {
    return (
        <div className="bg-gray-800 py-4 " >
            < div className="container flex flex-col md:flex-row lg:flex-row items-center">
                <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
                     <Image 
                     src={logo}
                     width={160}
                     height={60}
                     objectFit="contain"
                     className="cursor-pointer"
                     alt="" />

                     <ul className="flex text-white capitalize gap-12 text-s">
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Pricing</li>
                     </ul>
                     
                </div>

                    <ul className="flex gap-5 mt-12 md:mt-0 justify-center lg:mr-5">
                    
                        <li className="text-white"><Facebook/></li>
                        <li className="text-white "><Twitter/></li>
                    </ul>

                    
                
                </div>
        </div>
    )
}

export default Footer 
