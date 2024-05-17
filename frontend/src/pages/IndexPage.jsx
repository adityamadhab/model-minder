import React from 'react';
import { ImageUpload } from '../components/ImageUpload';
import { Landing } from '../components/Landing';
import { ChooseUs } from '../components/ChooseUs';
import { Footer } from '../components/Footer';

export const IndexPage = () => {

    return (
        <div>
            <Landing />
            <ImageUpload />
            <ChooseUs/>
            <Footer/>
        </div>
    );
};
