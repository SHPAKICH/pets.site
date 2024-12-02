import React from 'react';
import { Link } from 'react-router-dom';
const AnimalCard = ({ image, title, district, description, date, link }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="Фото животного" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Район: {district}</p>
                    <p className="card-text">Описание: {description}</p>
                    <p className="card-text"><small>Дата: {date}</small></p>
                    <Link className="btn btn-outline-success" to="/pet/CA-010-SPB">
                    Подробнее
                    </Link>
                </div>
            </div>
        </div>
    );
};

const AnimalList = () => {
    const animals = [
        {
            image: '../media/сфинкс.jpg',
            title: 'Кошка, порода Сфинкс',
            district: 'Василеостровский',
            description: 'Найдена кошка, очень грустная.',
            date: '01-01-1970',
            link: 'pet.html',
        },
        // Добавьте другие объекты животных здесь
    ];

    return (
        <section className="mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {animals.map((animal, index) => (
                    <AnimalCard key={index} {...animal} />
                ))}
            </div>
        </section>
    );
};

export default AnimalList;