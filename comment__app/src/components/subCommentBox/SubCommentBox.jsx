import React, { useRef, useState } from "react";
import styles from "../inputBox/input.module.css"
import axios  from "axios";
const SubCommentBox = (props) => {
  const message = useRef();
  // eslint-disable-next-line
  const [commentFocus, setCommentFocus] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [disableBtn, setDisableBtn] = useState(true);

  const handleFocus = () => {
    setCommentFocus(true);
    setShowBtn(true);
  };

  const handleBurr = () => {
    setCommentFocus(false);
  };

  const handleCommentWrote = (event) => {
    let currMessage = event.target.value;
    if (currMessage) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:8080/api/v1/subcomments/create`, {
        message: message.current.value,
        user: "Dummy User",
        messageId:props.commentId
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.commentBox}>
      <form>
        <input
          ref={message}
          type="text"
           placeholder="Add your comment"
          onFocus={handleFocus}
          autoFocus={props.autoFocus}
          onBlur={handleBurr}
          onKeyUp={handleCommentWrote}
        />
        {showBtn && (
          <div className={styles.btn}>
            <button disabled={disableBtn} onClick={handleSubmit}>COMMENT</button>
            <button
              onClick={() => {
                props.handleOpenReply()
                setShowBtn(false);
              }}
            >
              CANCEL
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default SubCommentBox;
