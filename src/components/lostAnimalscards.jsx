import React, { useState, useEffect } from 'react';
import Pagination from '../components/pagination';
import Card from '../components/LACard';

const FoundAnimalsCards = ({ searchParams }) => {
    const [animals, setAnimals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAnimals = async (page) => {
        setLoading(true);
        setError(null);
        const { district, kind } = searchParams;
        const query = new URLSearchParams({ district, kind }).toString();

        
        try {
            
            console.log(query);
            console.log(district);
            console.log(kind);
            const response = await fetch(`https://pets.xn--80ahdri7a.site/api/search/order/?${query}`,{mode: 'no-cors'});
            console.log(response.status);
            if (response.status === 200) {
                const result = await response.json();
                const orders = result.data.orders;

                setAnimals(orders);
                setTotalPages(Math.ceil(orders.length / 10)); // Предположим, что сервер возвращает все результаты, а мы делаем пагинацию на клиенте.
            } else if (response.status === 204) {
                setAnimals([]);
                setTotalPages(1);
            } else {
                throw new Error(`Ошибка: ${response.status}`);
            }
        } catch (err) {
            setError('Не удалось загрузить данные. Попробуйте позже.');
            setAnimals([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimals(currentPage);
    }, [searchParams, currentPage]);

    return (
        <div className="container mt-5">
            <h2>Результаты поиска</h2>
            {loading ? (
                <div>Загрузка...</div>
            ) : error ? (
                <div className="alert alert-danger">{error}</div>
            ) : animals.length > 0 ? (
                <>
                    <div className="row">
                        {animals.slice((currentPage - 1) * 10, currentPage * 10).map((animal) => (
                            <Card key={animal.id} data={animal} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </>
            ) : (
                <div className="alert alert-info">Нет результатов по вашему запросу.</div>
            )}
        </div>
    );
};

export default FoundAnimalsCards;
