import PhotoCarousel from "../components/photoCarousel";
import LostAnimalsCard from "../components/lostAnimalscards";
import SubForm from "../components/subscriptionForm";
import React from 'react';
import catImage from '../media/кошка.jpg';
import goatImage from '../media/коза.jpg';
import mouseImage from '../media/мышь.jpg';

const slidesData = [
  {
    image: catImage,
    alt: 'Кошка',
    caption: 'Найден хозяин!',
  },
  {
    image: goatImage,
    alt: 'Коза',
    caption: 'Найден хозяин!',
  },
  {
    image: mouseImage,
    alt: 'Мышь',
    caption: 'Найден хозяин!',
  },
];


const MainPage = () => {
    return (
        <div>
        <PhotoCarousel  slides={slidesData}/>
        <LostAnimalsCard/>
        <SubForm/>
        </div>
    );
};

export default MainPage;