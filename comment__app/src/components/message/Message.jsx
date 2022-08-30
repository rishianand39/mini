import React, { useState } from "react";
import styles from "./message.module.css";
const Message = (props) => {
  const [arrowUp, setArrowUp] = useState(false);

  const handleArrowUpDown = () => {
    setArrowUp(!arrowUp);
  };
  return (
    <>
      <section className={styles.message__container}>
        <div className={styles.top}>
          <i className="fa-solid fa-circle-user"></i>
          <div className={styles.name}>{props.user}</div>
        </div>
        <div className={styles.center}>
          <div>{props.message}</div>
        </div>
        <div className={styles.bottom}>
          <i className="fa-solid fa-thumbs-up"></i>
          <span>{props.likes}</span>
          <i className="fa-solid fa-thumbs-down"></i>
          <span>{props.dislike}</span>
          {props.editable ? <div>Delete</div> : <div>Reply</div>}
        </div>
        <div className={styles.arrowReplies}>
          <div onClick={handleArrowUpDown}>
            {arrowUp?<i class="fa-solid fa-caret-up"></i>:<i class="fa-solid fa-caret-down"></i>}
            View 4 replies
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
