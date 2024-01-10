import React from "react";

const CardComponent = ({ card , onDragStart}) => {
  return (
    <div
      className="card"
      draggable="true"
      onDragStart={(event)=>onDragStart(event, card?.id)}
    >
      <div>{card.title}</div>
    </div>
  );
};

export default CardComponent;
