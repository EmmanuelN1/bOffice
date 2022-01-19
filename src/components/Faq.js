import ArrowDown from "@material-ui/icons/ArrowDownwardSharp"
function Faq() {
    return (
        <div className="bg-gray-50 py-20">
            <div className="container">
                    <div className="sm:w-3/4 lg:w-7/12 mx-auto px-2">

                    <h1 className="text-2xl text-center">Frequently Asked Questions</h1>
                    <p className="text-center mt-2 text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus delectus dignissimos aut obcaecati, perferendis harum repudiandae deserunt accusamus. </p>
                    </div>  
            </div>

            {/* flex items */}
            <div className="p-5 flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
                <div className="flex items-center border-b py-4">
                    <span className="flex-1">
                        Who are we? 
                    </span>
                    <ArrowDown className=""/>
                </div>

                <div className="flex items-center border-b py-4">
                    <span className="flex-1">
                        What we do? 
                    </span>
                    <ArrowDown className=""/>
                </div>

                <div className="flex items-center border-b py-4">
                    <span className="flex-1">
                        Subscription Issues? 
                    </span>
                    <ArrowDown className=""/>
                </div>

                <div className="flex items-center  border-b py-4">
                    <span className="flex-1">
                        Is there a mobile app?
                    </span>
                    <ArrowDown className=""/>
                </div>

                <button className="flex self-center btn btn_blue mt-8"> More Info</button>
            </div>
            
        </div>
    )
} 

export default Faq
