export function FAQLanding() {
    return (
        <div className="flex flex-col md:flex-row items-center w-screen h-auto bg-white mb-8 p-8 md:p-16">
            <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                <img
                    src="/faq.jpg"
                    alt="FAQ"
                    className="w-full max-w-xs md:max-w-md rounded-lg"
                />
            </div>
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center mt-8 md:mt-0">
                <h1 className="text-3xl md:text-5xl text-yellow-500 mb-10 md:mb-20 font-black">
                    FAQ
                </h1>
                <p className="text-sm md:text-md text-gray-600 mb-6 md:mb-8">
                    Have questions about our service? Our FAQ section provides answers to the most common inquiries. From account setup to troubleshooting, find all the information you need to make the most of our platform.                
                </p>
            </div>
        </div>
    );
}
