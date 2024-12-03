import React from 'react';
import { useParams } from 'react-router-dom';
import PetDetail from '../components/petDetail';
import dogImage from '../media/собака.jpg';
import tigerImage from '../media/тигрята.jpg';
import opossumImage from '../media/опоссум.jpg';
import gorillaImage from '../media/горилла.jpg';
import squirrelImage from '../media/белка.jpg';
import mouseImage from '../media/мышь.jpg';
// Пример данных животных
const animals = [
  { img: dogImage, type: 'Собака', chip: '456', district: 'Кировский', date: '02/12/2024', description: 'Чёрный лабрадор, потерялся.' },
  { img: tigerImage, type: 'Котёнок', chip: '789', district: 'Василеостровский', date: '15/11/2024', description: 'Найдена полосатая кошка с яркими глазами.' },
  { img: opossumImage, type: 'Опоссум', chip: '101', district: 'Красносельский', date: '20/11/2024', description: 'Забавный опоссум, похоже, потерялся.' },
  { img: gorillaImage, type: 'Собака', chip: '102', district: 'Фрунзенский', date: '10/12/2024', description: 'Среднего размера собака с коричневой шерстью.' },
  { img: squirrelImage, type: 'Кошка', chip: '103', district: 'Центральный', date: '12/12/2024', description: 'Чёрная кошка с зелёными глазами.' },
  { img: mouseImage, type: 'Мышь', chip: '104', district: 'Адмиралтейский', date: '05/12/2024', description: 'Маленькая серая мышь найдена в подвале.' },
  { img: tigerImage, type: 'Тигрёнок', chip: '107', district: 'Приморский', date: '08/12/2024', description: 'Маленький тигрёнок с полосатой шерстью.' },
  { img: dogImage, type: 'Собака', chip: '109', district: 'Московский', date: '09/12/2024', description: 'Белая собака с ярким ошейником.' },
  { img: squirrelImage, type: 'Белка', chip: '110', district: 'Калининский', date: '07/12/2024', description: 'Рыжая белка в парке, выглядит испуганной.' },
  { img: opossumImage, type: 'Опоссум', chip: '111', district: 'Невский', date: '06/12/2024', description: 'Серый опоссум, похоже, домашний.' },
  { img: tigerImage, type: 'Тигрёнок', chip: '112', district: 'Пушкинский', date: '04/12/2024', description: 'Полосатый тигрёнок, очень активный.' },
  { img: mouseImage, type: 'Мышь', chip: '113', district: 'Красногвардейский', date: '03/12/2024', description: 'Маленькая мышка найдена в подъезде.' },
  { img: gorillaImage, type: 'Собака', chip: '114', district: 'Колпинский', date: '01/12/2024', description: 'Коричневая собака с биркой на ухе.' },
  { img: dogImage, type: 'Собака', chip: '115', district: 'Петроградский', date: '30/11/2024', description: 'Лабрадор с короткой шерстью.' },
  { img: tigerImage, type: 'Кошка', chip: '116', district: 'Центральный', date: '28/11/2024', description: 'Маленькая кошка с полосками.' },
  { img: opossumImage, type: 'Опоссум', chip: '117', district: 'Адмиралтейский', date: '27/11/2024', description: 'Домашний опоссум, любит людей.' },
  { img: squirrelImage, type: 'Белка', chip: '118', district: 'Фрунзенский', date: '25/11/2024', description: 'Рыжая белка в поисках еды.' },
  { img: gorillaImage, type: 'Собака', chip: '119', district: 'Красносельский', date: '23/11/2024', description: 'Крупная собака, выглядит уставшей.' },
  { img: tigerImage, type: 'Котёнок', chip: '120', district: 'Василеостровский', date: '20/11/2024', description: 'Полосатый котёнок найден на детской площадке.' },
  { img: dogImage, type: 'Собака', chip: '121', district: 'Кировский', date: '18/11/2024', description: 'Чёрная собака с голубым ошейником.' },
  { img: mouseImage, type: 'Мышь', chip: '122', district: 'Приморский', date: '15/11/2024', description: 'Серая мышь, выглядела испуганной.' },
  { img: squirrelImage, type: 'Белка', chip: '123', district: 'Калининский', date: '12/11/2024', description: 'Рыжая белка найдена около озера.' },
  { img: tigerImage, type: 'Кошка', chip: '124', district: 'Центральный', date: '10/11/2024', description: 'Чёрная кошка с белой грудкой.' },
  { img: gorillaImage, type: 'Собака', chip: '125', district: 'Фрунзенский', date: '08/11/2024', description: 'Собака с длинной шерстью.' },
];


const PetDetailPage = () => {
  const { chip } = useParams();

  // Находим животное по номеру чипа
  const animal = animals.find((animal) => animal.chip === chip);

  if (!animal) {
    return <h2 className="text-center my-5">Информация о животном не найдена.</h2>;
  }

  return <PetDetail data={animal} />;
};

export default PetDetailPage;
