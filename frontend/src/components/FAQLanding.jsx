export function FAQLanding() {
    return (
        <div className="flex flex-col md:flex-row items-center w-screen bg-white mb-8 p-8 md:p-16">
            <div className="md:w-1/2 text-left md:mt-0 flex-col justify-evenly">
                <h1 className="text-5xl text-yellow-500 mb-20 font-black">FAQ</h1>
                <p className="text-md text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero inventore placeat asperiores distinctio consectetur delectus dignissimos qui iure voluptate in.
                </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
                <img
                    src="/faq.jpg"
                    alt="Bike to Work"
                    className="w-full max-w-md rounded-lg"
                />
            </div>
        </div>
    )
}