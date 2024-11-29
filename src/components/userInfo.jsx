import React from 'react';

const UserInfo = () => {
    const userInfo = {
        name: 'Иван',
        email: 'mail@email.ru',
        phone: '89112345678',
        daysSinceRegistration: 100,
        adsAdded: 4,
        animalsFound: 2,
    };

    return (
        <main className="container mt-4">
            <section className="mb-4">
                <h2>Информация о пользователе</h2>
                <ul className="list-group">
                    <li className="list-group-item">Имя: {userInfo.name}</li>
                    <li className="list-group-item">Email: {userInfo.email}</li>
                    <li className="list-group-item">Телефон: {userInfo.phone}</li>
                    <li className="list-group-item">Дней с момента регистрации: {userInfo.daysSinceRegistration}</li>
                    <li className="list-group-item">Объявлений добавлено: {userInfo.adsAdded}</li>
                    <li className="list-group-item">Животных найдено: {userInfo.animalsFound}</li>
                </ul>
            </section>
        </main>
    );
};

export default UserInfo;
