import AnimalSearchForm from "../components/animalSearchForm";
import AnimalList from "../components/animalList";
import React from 'react';

const AnimalSearch = () => {
    return (
        <div>
        <AnimalSearchForm/>
        <AnimalList/>
        </div>
    );
};

export default AnimalSearch;