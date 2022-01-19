import Image from "next/image"
import img1 from "../assets/pic1.png"
import img2 from "../assets/pic2.png"
import img3 from "../assets/pic3.png"
import img4 from "../assets/pic4.png"
import img5 from "../assets/pic5.png"
import img6 from "../assets/pic6.png"
import img7 from "../assets/pic7.png"

function Download() {
    return (
        <div className="py-10 mt-10">
            <div className="sm:w-3/4 lg:w-7/12 mx-auto px-2">

                <h1 className="text-2xl text-center">Downloads</h1>
                <p className="text-center mt-2 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus delectus dignissimos aut obcaecati, perferendis harum repudiandae deserunt accusamus. </p>
                </div>

                {/* Cards */}
            <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16 max-w-screen-lg mt-16">
                {/*Card 1 */}
                <div className="flex flex-col rounded-md shadow-md">
                    <div className="p-6 flex flex-col items-center ">
                        <Image
                        src={img4}
                        height={120}
                        width={150}
                        />
                        <h3 className="mt-5 mb-2 text-gray-00 text-lg text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti mollitia maiores.
                        </h3>
                        <p className="mb-2 text-gray-500 font-light text-center"> Download For Desktop</p> 
                    </div>
                        <hr className="border-b border-white-900"/>
                        <div className="flex p-6 ">
                            <button className="flex-1 btn btn_blue "> Desktop Version</button>
                        </div>
                </div>
                {/*Card 2 */}
                <div className="flex flex-col rounded-md shadow-md">
                    <div className="p-6 flex flex-col items-center ">
                        <Image
                        src={img7}
                        height={120}
                        width={150}
                        />
                        <h3 className="mt-5 mb-2 text-gray-00 text-lg text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti mollitia maiores.
                        </h3>
                        <p className="mb-2 text-gray-500 font-light text-center"> Download For Andriod</p> 
                    </div>
                        <hr className="border-b border-white-900"/>
                        <div className="flex p-6 ">
                            <button className="flex-1 btn btn_blue "> Andriod Version</button>
                        </div>
                </div>
                {/*Card 3 */}

                <div className="flex flex-col rounded-md shadow-md ">
                    <div className="p-6 flex flex-col items-center ">
                        <Image
                        src={img3}
                        height={120}
                        width={150}
                        />
                        <h3 className="mt-5 mb-2 text-gray-00 text-lg text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti mollitia maiores.
                        </h3>
                        <p className="mb-2 text-gray-500 font-light text-center"> Download For IOS</p> 
                    </div>
                        <hr className="border-b border-white-900"/>
                        <div className="flex p-6 ">
                            <button className="flex-1 btn btn_blue "> IOS Version</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Download;
