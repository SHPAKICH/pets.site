import React from 'react';

const Card = ({ data }) => {
    const { kind, photos, description, mark, district, date, phone, email, name } = data;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={photos} className="card-img-top" alt={`${kind}`} />
                <div className="card-body">
                    <h5 className="card-title">{kind}</h5>
                    <p className="card-text">
                        <strong>Описание:</strong> {description}
                    </p>
                    <p><strong>Клеймо:</strong> {mark}</p>
                    <p><strong>Район:</strong> {district}</p>
                    <p><strong>Дата:</strong> {date}</p>
                    <p><strong>Контакты:</strong> {phone}, {email}</p>
                    <p><strong>Имя:</strong> {name}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
