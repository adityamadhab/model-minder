import React from 'react';
import { FAQSection } from '../components/FAQSection';
import { FAQLanding } from '../components/FAQLanding';
import { Footer } from '../components/Footer';

export const FaqPage = () => {
    return (
        <div>
            <FAQLanding/>
            <FAQSection/>
            <Footer/>
        </div>
    )
};
