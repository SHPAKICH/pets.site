import PhotoCarousel from "../components/photoCarousel";
import LostAnimalsCard from "../components/lostAnimalscards";
import SubForm from "../components/subscriptionForm";
import React from 'react';

const MainPage = () => {
    return (
        <div>
        <PhotoCarousel/>
        <LostAnimalsCard/>
        <SubForm/>
        </div>
    );
};

export default MainPage;