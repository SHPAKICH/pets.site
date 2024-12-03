import AnimalSearchForm from "../components/animalSearchForm";
import LostAnimalscards from "../components/lostAnimalscards";
import React from 'react';

const AnimalSearch = () => {
    return (
        <div>
        <AnimalSearchForm/>
        <LostAnimalscards/>
        </div>
    );
};

export default AnimalSearch;