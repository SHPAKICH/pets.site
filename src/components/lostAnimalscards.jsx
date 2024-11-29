import React from 'react';
import { Link } from 'react-router-dom';

// Импорт изображений
import dogImage from '../media/собака.jpg';
import tigerImage from '../media/тигрята.jpg';
import opossumImage from '../media/опоссум.jpg';
import gorillaImage from '../media/горилла.jpg';
import squirrelImage from '../media/белка.jpg';
import mouseImage from '../media/мышь.jpg';

const FoundAnimalsCards = () => {
  return (
    <div className="container mt-5">
      <h1 className="p-3 text-center">Найденные животные!</h1>
      <div className="row">
        {/* Карточка для собаки */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img
              src={dogImage}
              className="card-img-top"
              alt="Собака"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Вид животного: Собака</p>
              <p className="card-text">Номер чипа: DO-001-SPB</p>
              <p className="card-text">Район: Кировский</p>
              <p className="card-text">Дата: 20.07.2019</p>
              <Link className="btn btn-outline-success" to="/pet/DO-001-SPB">
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для тигра */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img
              src={tigerImage}
              className="card-img-top"
              alt="Тигр"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Вид животного: Тигр</p>
              <p className="card-text">Номер чипа: TI-002-SPB</p>
              <p className="card-text">Район: Московский</p>
              <p className="card-text">Дата: 20.12.2023</p>
              <Link className="btn btn-outline-success" to="/pet/TI-002-SPB">
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для опоссума */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img
              src={opossumImage}
              className="card-img-top"
              alt="Опоссум"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Вид животного: Опоссум</p>
              <p className="card-text">Номер чипа: OP-003-SPB</p>
              <p className="card-text">Район: Василеостровский</p>
              <p className="card-text">Дата: 20.05.2024</p>
              <Link className="btn btn-outline-success" to="/pet/OP-003-SPB">
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для гориллы */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img
              src={gorillaImage}
              className="card-img-top"
              alt="Горилла"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Вид животного: Горилла</p>
              <p className="card-text">Номер чипа: GO-004-SPB</p>
              <p className="card-text">Район: Красносельский</p>
              <p className="card-text">Дата: 24.10.2024</p>
              <Link className="btn btn-outline-success" to="/pet/GO-004-SPB">
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для белки */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img
              src={squirrelImage}
              className="card-img-top"
              alt="Белка"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Вид животного: Белка</p>
              <p className="card-text">Номер чипа: SQ-005-SPB</p>
              <p className="card-text">Район: Центральный</p>
              <p className="card-text">Дата: 17.11.2024</p>
              <Link className="btn btn-outline-success" to="/pet/SQ-005-SPB">
                Подробнее
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для мыши */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '100%' }}>
            <img
              src={mouseImage}
              className="card-img-top"
              alt="Мышь"
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <p className="card-text">Вид животного: Мышь</p>
              <p className="card-text">Номер чипа: MO-006-SPB</p>
              <p className="card-text">Район: Кировский</p>
              <p className="card-text">Дата: 25.11.2024</p>
              <Link className="btn btn-outline-success" to="/pet/MO-006-SPB">
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundAnimalsCards;
