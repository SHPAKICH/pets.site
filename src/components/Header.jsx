import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import AuthModal from '../components/authModal';
import logo from '../media/logo.jpg';

const Header = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isActive = (path) => location.pathname === path;

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
                <Link className={`nav-link ${isActive('/') ? 'disabled' : ''}`} to="/">
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/myaccount') ? 'disabled' : ''}`} to="/myaccount">
                  Личный кабинет
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/registration') ? 'disabled' : ''}`} to="/registration">
                  Регистрация
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/add-pet') ? 'disabled' : ''}`} to="/add-pet">
                  Добавить объявление
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/pet-search') ? 'disabled' : ''}`} to="/pet-search">
                  Поиск по объявлениям
                </Link>
              </li>
            </ul>
            <Button variant="primary" onClick={handleShow}>
              Авторизация
            </Button>
          </div>
        </div>
      </nav>
      <AuthModal show={show} handleClose={handleClose} />
    </header>
  );
};

export default Header;
