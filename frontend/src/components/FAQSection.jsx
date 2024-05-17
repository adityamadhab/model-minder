import React, { useState } from 'react';

export const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'What is Model Minder?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam amet similique facere adipisci consequuntur.'
        },
        {
            question: 'How does it work?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.'
        },
        {
            question: 'What are the major challenges of current model?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.'
        },
        {
            question: 'How does Model Minder address the above challenges?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.'
        },
        {
            question: 'How can I be a part of Model Minder?',
            answer: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis saepe molestiae distinctio asperiores cupiditate consequuntur dolor ullam, iure eligendi harum eaque hic corporis debitis porro consectetur voluptate rem officiis architecto.'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto mt-4 mb-10">
            <p className="text-center mt-6 text-xl">Frequently Asked Questions</p>
            {faqData.map((item, index) => (
                <div key={index} className={`faq ${activeIndex === index ? 'border-none' : 'border border-gray-300'} my-2`}>
                    <button
                        className={`accordion w-full p-6 flex justify-between items-center text-lg font-semibold focus:outline-none ${activeIndex === index ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.question}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    <div className={`pannel overflow-hidden transition-max-height duration-200 ease-in-out ${activeIndex === index ? 'max-h-screen p-6 bg-gray-100' : 'max-h-0 p-0'}`}>
                        <p className="text-gray-700 text-lg">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};