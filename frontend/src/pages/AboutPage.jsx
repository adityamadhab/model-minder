import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function AboutPage() {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center w-screen h-auto bg-white mb-8 p-8 md:p-16">
                <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="/about.jpg"
                        alt="About Us"
                        className="w-full max-w-xs md:max-w-md rounded-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 text-left flex flex-col justify-center md:justify-evenly mt-8 md:mt-0">
                    <h1 className="text-3xl md:text-5xl text-yellow-500 mb-10 md:mb-20 font-black">
                        ABOUT US
                    </h1>
                    <p className="text-sm md:text-md text-gray-600 mb-6 md:mb-8">
                        Our project is entitled “Model Minder”. It is a pioneering project centered around utilizing the ResNet deep learning architecture for accurate vehicle identification.
                        The ubiquity of bikes in urban transportation necessitates efficient and accurate methods for their identification. Existing solutions often focus on basic object detection, classifying objects as simply "bikes" or “car”. Model Minder proposes a novel approach that leverages the power of deep learning for fine-grained vehicle recognition, delving beyond basic identification to classify whether it is a car or a two wheeler bike/scooty.
                        The core of Model Minder rests on the well-established ResNet deep learning architecture. Renowned for its ability to train deep convolutional neural networks (CNNs) effectively. ResNet is ideally suited for image classification tasks involving complex objects with intricate details, like bikes.
                    </p>
                    <Link to={'/support'}>
                        <button className="px-6 py-3 text-lg font-extrabold text-white bg-yellow-500 hover:bg-yellow-600 mt-8 md:mt-20 rounded-3xl">
                            CONTACT NOW!
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}
