import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card" style={{ width: '100%' }}>
        <img
          src={props.data.img}
          className="card-img-top"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
          alt={props.data.type}
        />
        <div className="card-body">
          <p className="card-text">Вид животного: {props.data.type}</p>
          <p className="card-text">Район: {props.data.district}</p>
          <p className="card-text">Дата: {props.data.date}</p>
          <Link className="btn btn-outline-success" to={`/pet/${props.data.chip}`}>
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
