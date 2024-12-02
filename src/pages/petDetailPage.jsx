import React from 'react';
import { useParams } from 'react-router-dom';
import PetDetail from '../pages/petDetail';


const pets = {
  "DO-001-SPB": {
    image: "media/собака.jpg",
    type: "Собака",
    description: "Потерялся смешной пёс. Рыжий с белым пузиком.",
    district: "Кировский",
    date: "20.07.2019",
  },
  "TI-002-SPB": {
    image: "media/собака.jpg",
    type: "Собака",
    description: "Потерялся смешной пёс. Рыжий с белым пузиком.",
    district: "Кировский",
    date: "20.07.2019",
  },
  "OP-003-SPB": {
    image: "media/кошка.jpg",
    type: "Кошка",
    description: "Пропала кошка с белыми лапками.",
    district: "Василеостровский",
    date: "15.03.2021",
  },
  "CA-010-SPB": {
    image: "media/кошка.jpg",
    type: "Кошка",
    description: "Пропала кошка с белыми лапками.",
    district: "Василеостровский",
    date: "15.03.2021",
  },
  "GO-004-SPB": {
    image: "media/кошка.jpg",
    type: "Кошка",
    description: "Пропала кошка с белыми лапками.",
    district: "Василеостровский",
    date: "15.03.2021",
  },
  "SQ-005-SPB": {
    image: "media/кошка.jpg",
    type: "Кошка",
    description: "Пропала кошка с белыми лапками.",
    district: "Василеостровский",
    date: "15.03.2021",
  },
};

const PetDetailPage = () => {
  const { chipNumber } = useParams(); // Получаем chipNumber из URL
  const pet = pets[chipNumber]; // Получаем данные животного из списка

  if (!pet) {
    return <div>Животное с номером {chipNumber} не найдено.</div>;
  }

  // Передаем данные в PetDetail
  return <PetDetail {...pet} chipNumber={chipNumber} />;

};

export default PetDetailPage;
