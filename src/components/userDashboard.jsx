import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../components/userInfo';
import MyAds from '../components/myAds';

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
            const response = await fetch(`https://pets.сделай.site/api/users/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setUser(data);Ъ}
            if (response.status === 200) {
                const daysSinceRegistration = calculateDaysSinceRegistration(data.user.registrationDate);
                setUserData({
                    ...data.user,
                    daysSinceRegistration,
                });
            } else {
                setError(data.error.message || 'Ошибка при загрузке данных.');
            }
        } catch (error) {
            setError('Произошла ошибка при подключении к серверу.');
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
                <div>
                    <UserInfo data={userData} />
                    <MyAds userId={userData.id} />
                </div>
            )}
        </div>
    );
};

export default UserDashboard;
