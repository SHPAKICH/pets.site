import React, { useEffect, useState } from 'react';

const MyAds = ({ userId }) => {
    const [ads, setAds] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await fetch(`https://pets.сделай.site/api/users/orders`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.token}`,
                    },
                });
                const data = await response.json();
                console.log(data);
                if (response.status === 200) {
                    setAds(data.data.orders);
                } else {
                    setError(data.error.message || 'Ошибка при загрузке объявлений.');
                }
            } catch (error) {
                setError('Произошла ошибка при подключении к серверу.');
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchAds();
    }, [userId]);

    if (loading) {
        return <div>Загрузка объявлений...</div>;
    }

    return (
        <section>
            <h2>Мои объявления</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {ads?.length === 0 ? (
                    <div className="alert alert-info">У вас нет добавленных объявлений.</div>
                ) : (
                    ads?.map((ad) => (
                        <div className="col" key={ad.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{ad.kind}</h5>
                                    <p className="card-text">Описание: {ad.description}</p>
                                    <p className="card-text">
                                        <small>Статус: {ad.status}</small>
                                    </p>

                                            <button className="btn btn-secondary m-2">Редактировать</button>
                                            <button className="btn btn-danger">Удалить</button>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};
//
export default MyAds;
