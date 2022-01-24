function Newsletter() {
    return (
        <div className="bg-blue-600 text-white py-10">
            <div className="p-5 container">
                <div className="sm:w-3/4 lg:w-2/4 mx-auto">
                    <p className="font-light capitalize t text-center mb-3">Over 80,000 Subscribers</p>
                    <h1 className="text-xl text-center">Stay up to date with what we are doing</h1>
                    <div className="flex flex-col sm:flex-row gap-8 md:gap-6 lg:gap-6 mt-8">
                        <input type="text" placeholder="Enter your email address" className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black" />

                        <button className="btn btn_grey self-center"> Subscribe Now </button>  
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Newsletter
