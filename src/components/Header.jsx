import React from 'react';
import logo from 'media/logo.jpg';
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Логотип" style={{ width: '75px', height: 'auto' }} />
          </a>
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
                <a className="nav-link disabled" aria-current="page" href="index.html">
                  Главная
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="myaccount.html">
                  Личный кабинет
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="registration.html">
                  Регистрация
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="add_pet.html">
                  Добавить объявление
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="pet_search_page.html">
                  Поиск по объявлениям
                </a>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-primary m-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Авторизация
            </button>
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
    </header>
  );
};

export default Header;
