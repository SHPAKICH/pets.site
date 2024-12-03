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

    const [errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;
        const phoneRegex = /^\+7\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if (!formData.name.trim() || formData.name.length < 2 || !nameRegex.test(formData.name)) {
            errors.name = 'Имя должно содержать только буквы и быть не короче 2 символов.';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = 'Телефон должен быть в формате +7XXXXXXXXXX.';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = 'Введите корректный email.';
        }
        if (!formData.password || !passwordRegex.test(formData.password)) {
            errors.password = 'Пароль должен быть не менее 8 символов, содержать буквы и цифры.';
        }
        if (formData.password !== formData.passwordConfirmation) {
            errors.passwordConfirmation = 'Пароли не совпадают.';
        }
        if (!formData.confirm) {
            errors.confirm = 'Необходимо согласие на обработку данных.';
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log('Форма отправлена:', formData);
            // Здесь можно отправить данные на сервер
        }
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
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
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
                    />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
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
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
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
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
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
                    />
                    {errors.passwordConfirmation && (
                        <div className="text-danger">{errors.passwordConfirmation}</div>
                    )}
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
                    />
                    <label className="form-check-label" htmlFor="confirm">
                        Согласен на обработку персональных данных
                    </label>
                    {errors.confirm && <div className="text-danger">{errors.confirm}</div>}
                </div>

                {/* Кнопка отправки */}
                <button type="submit" className="btn btn-primary w-100">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
