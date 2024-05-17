import { useState } from 'react';

export function SupportPage() {
    const [showContactForm, setShowContactForm] = useState(false);

    const toggleContactForm = () => {
        setShowContactForm(!showContactForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <div className="h-screen">
            <div className="m-2">
                <div className="flex flex-col m-auto gap-10 justify-center items-center text-center py-16">
                    <div className="w-full mx-auto xl:px-20 md:px-10 px-4">
                        <img
                            src="/support.png"
                            alt="supportImage"
                            className="max-w-md m-auto w-full false"
                        />
                    </div>
                    <h1>
                        Need Support? 
                        <span className="underline cursor-pointer" onClick={toggleContactForm}> Contact us</span>
                    </h1>
                </div>
            </div>
            {showContactForm && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <h2 className="mb-4">Contact Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full border rounded-lg px-3 py-2" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full border rounded-lg px-3 py-2" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full border rounded-lg px-3 py-2" required></textarea>
                            </div>
                            <div className="flex justify-between items-center">
                                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Submit</button>
                                <button onClick={toggleContactForm} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
