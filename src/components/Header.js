import Image from "next/image";
import img1 from "../assets/pic10.png"

function Header() {
    return (
        <div className="">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-2 lg:mg-28 ">
            
            
            {/* Content Area */}
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Web App
                    </h2>
                    <p className="text-lg text-center lg:text-left mb-6 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi et eaque quos eius eos cupiditate odio ducimus inventore suscipit beatae assumenda impedit tenetur nihil id, consectetur ratione, voluptatem fugit veniam!
                    </p>

                    <div className="flex justify-center flex-wrap gap-6">
                        <button className="btn btn_blue "> About Us </button>
                        <button className="btn btn_grey"> Contact Us </button>
                    </div>
                </div>
            
                    {/*Image Area */}
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10 w-5/6 h-5/6 sm:h-3/4 sm:w-3/4 md:w-full md:h-full">
                        <Image 
                            src={img1}
                            objectFit="contain"
                            className=""
                        />
                    </div>

            
             </div>
        </div>
    )
}

export default Header;
