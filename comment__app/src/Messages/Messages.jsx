import React from "react";
import styles from "./messages.module.css";
import Message from "../components/message/Message";
const Messages = () => {
  return (
    <>
      <Message  user="Dummy User" editable={false}  message="Dummy message" likes={25}/>
      <div className={styles.bottom__bar}>
        <div className={styles.loading__indicator}></div>
      </div>
    </>
  );
};

export default Messages;
