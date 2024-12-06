import React from 'react';

const UserInfo = ({ data }) => {
    return (
        <main className="container mt-4">
            <section className="mb-4">
                <h2>Информация о пользователе</h2>
                <ul className="list-group">
                    <li className="list-group-item">Имя: {data.name}</li>
                    <li className="list-group-item">Email: {data.email}</li>
                    <li className="list-group-item">Телефон: {data.phone}</li>
                    <li className="list-group-item">Дней с момента регистрации: {data.daysSinceRegistration}</li>
                    <li className="list-group-item">Объявлений добавлено: {data.ordersCount}</li>
                    <li className="list-group-item">Животных найдено: {data.petsCount}</li>
                </ul>
            </section>
        </main>
    );
};

export default UserInfo;
