import React, { useState } from "react";
import CardComponent from "./CardComponent";

const cards = [
  { id: 1, title: "Card 1", description: "Description for Card 1" },
  { id: 2, title: "Card 2", description: "Description for Card 2" },
  { id: 3, title: "Card 3", description: "Description for Card 3" },
  { id: 4, title: "Card 4", description: "Description for Card 4" },
  { id: 5, title: "Card 5", description: "Description for Card 5" },
];

const CardList = () => {
  const [cardOrder, setCardOrder] = useState(cards);

  const dragStartHandler = (ev, id) => {
    ev.dataTransfer.setData("text/plain", id);
  };

  const dragOverHandler = (ev) => {
    ev.preventDefault();
  };

  const dropHandler = (ev) => {
    ev.preventDefault();
    const cardId = ev.dataTransfer.getData("text");
    const updatedCardOrder = cardOrder.filter((card) => card.id !== cardId);
    const droppedCard = cardOrder.find((card) => card.id === cardId);
    const targetIndex = Array.from(ev.target.parentNode.children).findIndex(
      (element) => element === ev.target
    );
    updatedCardOrder.splice(targetIndex, 0, droppedCard);
    setCardOrder(updatedCardOrder);
  };

  return (
    <div>
      <div className="cards">
        {cardOrder.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            onDragStart={(event) => dragStartHandler(event, card.id)}
          />
        ))}
      </div>
      <div
        id="target"
        onDrop={dropHandler}
        onDragOver={dragOverHandler}
        style={{ border: "1px solid black", height: "100px", width: "200px" }}
      >
        Drop Zone
      </div>
    </div>
  );
};

export default CardList;
