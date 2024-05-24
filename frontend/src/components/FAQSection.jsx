import React, { useState } from 'react';

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'What is Model Minder?',
            answer: 'It is an AI based vehicle identification model. It\'s a pioneering project centered around utilizing the ResNet deep learning architecture for accurate vehicle identification.' 
        },
        {
            question: 'How does it work?',
            answer: 'The user uploads an image, which undergoes optional OpenCV pre-processing before being analyzed by a ResNet model. The website then displays the image alongside a classification result, such as "motorcycle" with a confidence score.'
        },
        {
            question: 'What are the major challenges of current model?',
            answer: 'Training a ResNet model requires a large and well curated dataset of different vehicles. Acquiring and labeling this data can be resource intensive. While the model can achieve high accuracy, there\'s always a chance of misclassification, specially with challenging image or rare vehicle types.'
        },
        {
            question: 'How does Model Minder address the above challenges?',
            answer: 'Explore publicly available datasets like Kaggle, Open Images, or COCO for motorcycle images. Use OpenCV for data augmentation with transformations. Enable user contributions for image collection and labeling. Apply transfer learning with pre-trained ResNet models. Experiment with different ResNet variations and hyperparameters. Continuously retrain the model with new data for improved accuracy over time.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mt-4 mb-10 p-4 sm:p-6 lg:p-8">
            <p className="text-center mt-6 text-xl lg:text-2xl font-bold mb-6">Frequently Asked Questions</p>
            {faqData.map((item, index) => (
                <div key={index} className={`faq my-2 ${activeIndex === index ? 'border-none' : 'border border-gray-300'} rounded-lg`}>
                    <button
                        className={`accordion w-full p-4 sm:p-6 flex justify-between items-center text-left text-md sm:text-lg font-semibold focus:outline-none ${activeIndex === index ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className={`pannel overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex === index ? 'max-h-screen p-4 sm:p-6 bg-gray-100' : 'max-h-0 p-0'}`}>
                        <p className="text-gray-700 text-md sm:text-lg">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
