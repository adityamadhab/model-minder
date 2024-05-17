import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function AboutPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center w-screen h-screen bg-white mb-8 p-8 md:p-16">
                <div className="md:w-1/2 text-left md:mt-0 flex-col justify-evenly">
                    <h1 className="text-5xl text-yellow-500 mb-20 font-black">ABOUT US</h1>
                    <p className="text-md text-gray-600 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, laudantium? Debitis nam quaerat commodi molestias a impedit suscipit pariatur quas itaque minima dolorem earum, adipisci inventore, cupiditate laborum. Adipisci qui aut assumenda pariatur esse aliquid ab laborum reiciendis accusamus dolores officiis animi, exercitationem quidem. Necessitatibus quis voluptatibus iusto officiis atque accusamus, dolore non dicta quisquam doloremque in distinctio eveniet quas accusantium omnis incidunt officia expedita. Eos aperiam cupiditate recusandae possimus dignissimos iure tenetur amet minima ipsam, a aliquam. Omnis fugit eos animi, est sed inventore aspernatur laudantium ducimus aliquid! Culpa modi ullam labore neque ex veritatis laborum fugiat totam nam.
                    </p>
                    <Link to={'/support'}>
                        <button className="px-6 py-3 text-lg font-extrabold text-white bg-yellow-500 hover:bg-yellow-600 mt-20 rounded-3xl mr-36">
                            CONTACT NOW!
                        </button>
                    </Link>
                </div>
                <div className="md:w-1/2 flex justify-end">
                    <img
                        src="/about.jpg"
                        alt="Bike to Work"
                        className="w-full max-w-md rounded-lg"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}