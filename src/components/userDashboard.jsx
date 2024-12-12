import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Вы не авторизованы.');
            navigate('/login');
        } else {
            fetchUserData(token);
        }
    }, [navigate]);

    const fetchUserData = async (token) => {
        setLoading(true);
        try {
            const response = await fetch(`https://pets.сделай.site/api/users`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            
            if (response.ok) {
                const data = await response.json();

                const daysSinceRegistration = calculateDaysSinceRegistration(data.registrationDate);
                setUserData({
                    ...data, // Предполагаем, что вся информация о пользователе находится в data.user
                    daysSinceRegistration,
                });
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Ошибка при загрузке данных.');
            }
        } catch (error) {
            setError('Произошла ошибка при подключении к серверу.');
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    
    const calculateDaysSinceRegistration = (registrationDate) => {
        const today = new Date();
        const registration = new Date(registrationDate);
        const diffTime = today - registration;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    if (loading) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            {error && <div className="alert alert-danger">{error}</div>}
            {userData && (
                <main className="container mt-4">
                    <section className="mb-4">
                        <h2>Информация о пользователе</h2>
                        <ul className="list-group">
                            <li className="list-group-item">Имя: {userData.name}</li>
                            <li className="list-group-item">Email: {userData.email}</li>
                            <li className="list-group-item">Телефон: {userData.phone}</li>
                            <li className="list-group-item">Дней с момента регистрации: {userData.daysSinceRegistration}</li>
                            <li className="list-group-item">Объявлений добавлено: {userData.countOrder}</li>
                            <li className="list-group-item">Животных найдено: {userData.countPets}</li>
                        </ul>
                    </section>

                </main>
            )}
        </div>
    );
};

export default UserDashboard;
