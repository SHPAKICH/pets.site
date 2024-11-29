import React, { useState } from 'react';

const SubscriptionForm = () => {
  // Состояние для хранения введенного email
  const [email, setEmail] = useState('');

  // Обработчик изменения в поле ввода
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email) {
      console.log('Подписка на рассылку:', email);
      // Здесь можно добавить логику для отправки email на сервер
    } else {
      alert('Пожалуйста, введите адрес электронной почты.');
    }
  };

  return (
    <div className="m-3 text-center">
      <h1 className="mb-4">
        Подпишитесь на нас, чтобы всегда быть в курсе нахождения животных!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group justify-content-center" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <span className="input-group-text" id="addon-wrapping">@</span>
          <input
            type="email"
            className="form-control"
            placeholder="Адрес электронной почты"
            aria-label="Имя пользователя"
            aria-describedby="addon-wrapping"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscriptionForm;
