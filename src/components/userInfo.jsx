import React from 'react';



const UserInfo = (props) => {


    return (
        <main className="container mt-4">
            <section className="mb-4">
                <h2>Информация о пользователе</h2>
                <ul className="list-group">
                    <li className="list-group-item">Имя: {props.data.name}</li>
                    <li className="list-group-item">Email: {props.data.email}</li>
                    <li className="list-group-item">Телефон: {props.data.phone}</li>
                    <li className="list-group-item">Дней с момента регистрации: {props.data.daysSinceRegistration}</li>
                    <li className="list-group-item">Объявлений добавлено: {props.data.adsAdded}</li>
                    <li className="list-group-item">Животных найдено: {props.data.animalsFound}</li>
                </ul>
            </section>
        </main>
    );
};

export default UserInfo;
