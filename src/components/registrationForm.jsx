import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        confirm: false,
    });

    const [errors, setErrors] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Проверка на ошибки
        let formErrors = '';
        if (formData.password !== formData.passwordConfirmation) {
            formErrors = 'Пароли не совпадают';
        }

        if (!formData.confirm) {
            formErrors = 'Необходимо согласие на обработку данных';
        }

        if (formErrors) {
            setErrors(formErrors);
            return;
        }

        // Здесь отправка данных
        console.log('Форма отправлена:', formData);
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <form
                id="registrationForm"
                className="p-4 border rounded w-50 bg-light"
                onSubmit={handleSubmit}
            >
                <h3 className="text-center mb-4">Регистрация</h3>

                {/* Имя */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Имя
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Введите имя"
                        required
                    />
                </div>

                {/* Телефон */}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Телефон
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7XXXXXXXXXX"
                        required
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        required
                    />
                </div>

                {/* Пароль */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Пароль
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Введите пароль"
                        required
                    />
                </div>

                {/* Подтверждение пароля */}
                <div className="mb-3">
                    <label htmlFor="password_confirmation" className="form-label">
                        Подтвердите пароль
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password_confirmation"
                        name="passwordConfirmation"
                        value={formData.passwordConfirmation}
                        onChange={handleChange}
                        placeholder="Повторите пароль"
                        required
                    />
                </div>

                {/* Согласие */}
                <div className="form-check mb-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="1"
                        id="confirm"
                        name="confirm"
                        checked={formData.confirm}
                        onChange={handleChange}
                        required
                    />
                    <label className="form-check-label" htmlFor="confirm">
                        Согласен на обработку персональных данных
                    </label>
                </div>

                {/* Ошибки */}
                {errors && <div id="errors" className="text-danger mb-3">{errors}</div>}

                {/* Кнопка отправки */}
                <button type="submit" className="btn btn-primary w-100">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
