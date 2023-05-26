import React from "react";
import "./card.css";

const Card = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className="card"
      style={{ background: `${data.color}` }}
    >
      <img src={data.img} className="card-img-top" alt="Project" />
      <div className="card-body">
        {data.tags.map((tag, id) => {
          return (
            <div className="card-tag" key={id}>
              {tag}
            </div>
          );
        })}
      </div>
    </a>
  );
};

export default Card;
