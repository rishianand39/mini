import React, { useState } from "react";
import styles from "../message/message.module.css";
import SubCommentBox from "../subCommentBox/SubCommentBox";

const SubMessage = (props) => {
  const [openReply, setOpenReply] = useState(false);


  const handleDelete = () => {};

  const handleOpenReply = () => {
    setOpenReply(!openReply);
  };
  return (
    <>
      <section className={styles.message__container}>
        <div className={styles.top}>
          <i className="fa-solid fa-circle-user"></i>
          <div className={styles.name}>{props.user}</div>
        </div>
        <div className={styles.center}>
          <p style={{fontWeight:"normal"}}>{props.message}</p>
        </div>
        <div className={styles.bottom}>
          <i className="fa-solid fa-thumbs-up"></i>
          <span>{props.like}</span>
          <i className="fa-solid fa-thumbs-down"></i>
          <span>{props.dislike}</span>
          {props.editable ? (
            <div onClick={handleDelete}>Delete</div>
          ) : (
            <div onClick={handleOpenReply}>Reply</div>
          )}
        </div>
        <div className={styles.openReply__box}>

        {openReply && <SubCommentBox handleOpenReply={handleOpenReply} autoFocus={true}/>}
        </div>
       
        
      </section>
    </>
  );
};

export default SubMessage;
