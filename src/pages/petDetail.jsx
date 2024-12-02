import React, { useState } from 'react';

const PetDetail = ({ image, type, description, chipNumber, district, date }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCall = () => {
    alert(`Звонок по чипу: ${chipNumber}`);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <main className="container my-5">
      <div className="row align-items-center bg-light p-4 rounded shadow">
        <div className="col-md-6 text-center">
          <img src={image} className="img-fluid rounded" alt={type} />
        </div>
        <div className="col-md-6">
          <h2>{type}</h2>
          <p>
            <strong>Вид животного:</strong> {type}
          </p>
          <p>
            <strong>Описание:</strong> {description}
          </p>
          <p>
            <strong>Номер чипа:</strong> {chipNumber}
          </p>
          <p>
            <strong>Район:</strong> {district}
          </p>
          <p>
            <strong>Дата:</strong> {date}
          </p>
          <button className="btn btn-primary btn-lg" onClick={handleCall}>
            Позвонить
          </button>
        </div>
      </div>

      {/* Блок комментариев */}
      <section className="mt-4">
        <h4>Комментарии</h4>
        <div className="card mb-3">
          <div className="card-body">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Оставьте комментарий..."
              value={newComment}
              onChange={handleCommentChange}
            />
            <button className="btn btn-primary mt-2" onClick={handleAddComment}>
              Добавить комментарий
            </button>
          </div>
        </div>

        {/* Список комментариев */}
        <div className="list-group mt-3">
          {comments.map((comment, index) => (
            <div className="list-group-item" key={index}>
              {comment}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PetDetail;
