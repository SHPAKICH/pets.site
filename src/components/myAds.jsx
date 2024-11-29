import React from 'react';

const MyAds = () => {
    const ads = [
        {
            id: 1,
            title: 'Кошка, порода Сфинкс',
            description: 'Найдена кошка.',
            status: 'Активное',
        },
        {
            id: 2,
            title: 'Собака, порода Лабрадор',
            description: 'Найдена собака.',
            status: 'Активное',
        },
        // Другие объявления
    ];

    return (
        <section>
            <h2>Мои объявления</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {ads.map((ad) => (
                    <div className="col" key={ad.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{ad.title}</h5>
                                <p className="card-text">Описание: {ad.description}</p>
                                <p className="card-text">
                                    <small>Статус: {ad.status}</small>
                                </p>
                                <button className="btn btn-secondary">Редактировать</button>
                                <button className="btn btn-danger">Удалить</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MyAds;
