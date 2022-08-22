import React, { useRef, useState } from "react";
import styles from "./input.module.css";

const InputBox = () => {
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
  return (
    <div className={styles.commentBox}>
      <form>
        <input
          ref={message}
          type="text"
          placeholder="Add your comment"
          onFocus={handleFocus}
          onBlur={handleBurr}
          onKeyUp={handleCommentWrote}
        />
        {showBtn && (
          <div className={styles.btn}>
            <button disabled={disableBtn}>COMMENT</button>
            <button
              onClick={() => {
                setShowBtn(false);
                message.current.value = "";
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

export default InputBox;
