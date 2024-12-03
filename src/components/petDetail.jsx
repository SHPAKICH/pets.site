import React from 'react';

import './lostAnimalscards'


function PetDetail(props){
  return (
    <main className="container my-5">
      <div className="row align-items-center bg-light p-4 rounded shadow">
        <div className="col-md-6 text-center">
          <img src={props.data.img} className="img-fluid rounded" alt={props.data.chip} />
        </div>
        <div className="col-md-6">
          <h2>{props.data.type}</h2>
          <p>
            <strong>Вид животного: {props.data.type}</strong>
          </p>
          <p>
            <strong>Описание: {props.data.description}</strong> 
          </p>
          <p>
            <strong>Номер чипа: {props.data.chip}</strong> 
          </p>
          <p>
            <strong>Район: {props.data.district}</strong> 
          </p>
          <p>
            <strong>Дата: {props.data.date}</strong>
          </p>
          <button className="btn btn-primary btn-lg">
            Позвонить
          </button>
        </div>
      </div>
    </main>
  );
};

export default PetDetail;
