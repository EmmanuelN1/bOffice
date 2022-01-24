import Image from "next/image"
import img1 from "../assets/pic8.png"
import Nav from "../components/Nav"

function About() {
    return (
        <>    
            <Nav/>
                <div className="">
                    <div className="sm:w-3/4 lg:w-7/12 mx-auto px-2">

                    <h1 className="mt-10 text-2xl text-center ">About Us</h1>
                    <p className="text-center mt-2 pb-10 text-gray-400 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus delectus dignissimos aut obcaecati, perferendis harum repudiandae deserunt accusamus. </p>
                    </div>

                    {/*Features 1 */}
                    <div className="relative mt-10">
                        <div className="container flex flex-col lg:flex-row items-center justify-center gap-x-24 ">
                            <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0 ">
                                    <Image
                                    src={img1}
                                    height={180}
                                    width={280}
                                    
                            />          
                            </div>

                            <div className="flex flex-1 flex-col items-center lg:items-start">
                                <h1 className="text-2xl">More About Us</h1>
                                <p className="text-gray-400 my-4 text-center lg:text-left sm:w-3/4 lg:w-7/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et cupiditate consequuntur saepe consectetur quia ut, nostrum in repellendus cum error maiores provident quidem dolor magnam sequi, placeat neque quis?</p>
                                <button className=" btn btn_blue "> Contact Us </button>
                            </div> 

                        </div>
                    </div>


                </div>
        </>
    )
}

export default About; 
