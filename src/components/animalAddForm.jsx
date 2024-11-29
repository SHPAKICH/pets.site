import React, { useState } from 'react';

const AddPetForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    register: '0',
    password: '',
    passwordConfirmation: '',
    mark: '',
    description: '',
    photo1: null,
    photo2: null,
    photo3: null,
    confirm: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files : value,
    }));
  };

  const handleRegisterChange = (e) => {
    setIsRegistered(e.target.value === '1');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.photo1 || !formData.confirm) {
      alert('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    if (isRegistered && formData.password !== formData.passwordConfirmation) {
      alert('Пароли не совпадают.');
      return;
    }

    // Обработка отправки данных
    console.log('Form submitted with:', formData);
  };

  return (
    <main className="container mt-4">
      <h1>Добавление нового объявления</h1>
      <form id="addPetForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
        {/* Имя */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Имя пользователя</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            pattern="[а-яА-ЯёЁ\s\-]+"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Введите корректное имя (только кириллица, пробелы, дефисы).</div>
        </div>

        {/* Телефон */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Телефон</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            pattern="^\+?\d+$"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Введите корректный номер телефона (только цифры и знак +).</div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Электронная почта</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Введите корректный адрес электронной почты.</div>
        </div>

        {/* Регистрация */}
        <div className="mb-3">
          <label htmlFor="register" className="form-label">Автоматическая регистрация</label>
          <select
            className="form-select"
            id="register"
            name="register"
            value={formData.register}
            onChange={handleRegisterChange}
            required
          >
            <option value="0">Нет</option>
            <option value="1">Да</option>
          </select>
        </div>

        {/* Поля пароля */}
        {isRegistered && (
          <div id="passwordFields">
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Пароль</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}"
                title="Пароль должен содержать минимум 7 символов, включая одну заглавную букву, одну строчную букву и одну цифру."
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Пароль должен соответствовать требованиям.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="password_confirmation" className="form-label">Подтверждение пароля</label>
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleInputChange}
              />
              <div className="invalid-feedback">Пароли должны совпадать.</div>
            </div>
          </div>
        )}

        {/* Фото */}
        <div className="mb-3">
          <label htmlFor="photo1" className="form-label">Фото 1 (обязательно)</label>
          <input
            type="file"
            className="form-control"
            id="photo1"
            name="photo1"
            onChange={handleInputChange}
            required
          />
          <div className="invalid-feedback">Добавьте хотя бы одно изображение.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="photo2" className="form-label">Фото 2</label>
          <input
            type="file"
            className="form-control"
            id="photo2"
            name="photo2"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="photo3" className="form-label">Фото 3</label>
          <input
            type="file"
            className="form-control"
            id="photo3"
            name="photo3"
            onChange={handleInputChange}
          />
        </div>

        {/* Клеймо */}
        <div className="mb-3">
          <label htmlFor="mark" className="form-label">Клеймо</label>
          <input
            type="text"
            className="form-control"
            id="mark"
            name="mark"
            value={formData.mark}
            onChange={handleInputChange}
          />
        </div>

        {/* Описание */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Описание</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* Подтверждение */}
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="confirm"
            name="confirm"
            checked={formData.confirm}
            onChange={handleInputChange}
            value="1"
            required
          />
          <label className="form-check-label" htmlFor="confirm">
            Согласен на обработку персональных данных
          </label>
          <div className="invalid-feedback">Необходимо согласиться на обработку данных.</div>
        </div>

        <button type="submit" className="btn btn-primary">Добавить объявление</button>
      </form>
    </main>
  );
};

export default AddPetForm;
