import React, { useState } from 'react';

const AddPetForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    kind: '',
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
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation before submission
    if (!formData.name || !formData.phone || !formData.email || !formData.photo1 || !formData.confirm) {
      setErrorMessage('Пожалуйста, заполните все обязательные поля.');
      return;
    }

    if (isRegistered && formData.password !== formData.passwordConfirmation) {
      setErrorMessage('Пароли не совпадают.');
      return;
    }

    // Create a FormData object to send the data as multipart/form-data
    const form = new FormData();
    form.append('name', formData.name);
    form.append('phone', formData.phone);
    form.append('email', formData.email);
    form.append('district', formData.district);
    form.append('kind', formData.kind);
    form.append('password', formData.password);
    form.append('password_confirmation', formData.passwordConfirmation);
    form.append('confirm', formData.confirm ? 1 : 0);
    form.append('mark', formData.mark);
    form.append('description', formData.description);
    form.append('photo1', formData.photo1[0]);
    form.append('photo2', formData.photo2[0]);
    form.append('photo3', formData.photo3[0]);

    try {
      // Send the request to the API
      const response = await fetch('https://pets.сделай.site/api/pets', {
        method: 'POST',
        body: form, 
      });

      // Parse the JSON response
      const data = await response.json();
      console.log(response)
      if (response.status === 200) {
        // Success: Show a success message
        setSuccessMessage('Объявление успешно добавлено!');
        setErrorMessage('');
      } else {
        // Error: Show error messages from validation
        setErrorMessage(data.error.errors);
        setSuccessMessage('');
      }
    } catch (error) {
      // Handle any network or other errors
      setErrorMessage('Произошла ошибка при отправке данных.');
      setSuccessMessage('');
    }
  };

  return (
    <main className="container mt-4">
      <h1>Добавление нового объявления</h1>
      <form id="addPetForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
        {/* User Name */}
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

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Телефон</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
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

        {/* District */}
        <div className="mb-3">
          <label htmlFor="district" className="form-label">Район</label>
          <input
            type="district"
            className="form-control"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* District */}
        <div className="mb-3">
          <label htmlFor="kind" className="form-label">Вид животного</label>
          <input
            type="kind"
            className="form-control"
            id="kind"
            name="kind"
            value={formData.kind}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Register Option */}
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

        {/* Password Fields */}
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

        {/* Photos */}
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

        {/* Mark */}
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

        {/* Description */}
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

        {/* Confirm */}
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

        {/* Error or Success Messages */}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <button type="submit" className="btn btn-primary">Добавить объявление</button>
      </form>
    </main>
  );
};

export default AddPetForm;
