import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import logo from '../media/logo.jpg';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Логотип" style={{ width: '75px', height: 'auto' }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link disabled" to="/" aria-current="page">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/myaccount">
                  Личный кабинет
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registration">
                  Регистрация
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/add-pet">
                  Добавить объявление
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pet-search">
                  Поиск по объявлениям
                </Link>
              </li>
            </ul>
            <Button variant="primary" onClick={handleShow}>
              Авторизация
            </Button>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Поиск"
                aria-label="Поиск"
              />
              <button className="btn btn-outline-success" type="submit">
                Поиск
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Модальное окно */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Авторизация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Электронная почта</Form.Label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  <img src="media/emoji-smile.svg" alt="Эмодзи" style={{ width: '20px' }} />
                </span>
                <Form.Control type="email" placeholder="Введите email" />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Пароль</Form.Label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon2">
                  <img src="media/key.svg" alt="Ключ" style={{ width: '20px' }} />
                </span>
                <Form.Control type="password" placeholder="Введите пароль" />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCheck">
              <Form.Check type="checkbox" label="Запомнить меня" />
            </Form.Group>
            <div className="mb-3">
              <Link to="/registration">Регистрация</Link>
            </div>
            <div className="mb-3">
              <a href="#forgot-password">Забыли пароль?</a>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отменить
          </Button>
          <Button variant="primary" type="submit">
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
    </header>
  );
};

export default Header;
