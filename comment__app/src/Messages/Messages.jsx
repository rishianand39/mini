import React from "react";
import styles from "./messages.module.css";
import Message from "../components/message/Message";
import { useEffect } from "react";
import { useState } from "react";
const axios=require("axios")
const Messages = () => {
  const [comments,setComments]=useState([])

  const fetchComments=async()=>{
    try {
      const res=await axios.get("http://localhost:8080/api/v1/comments")
      setComments(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchComments()
  },[])
  return (
    <>
  {comments.map(comment=>{
    return <Message key={comment._id} id={comment._id} user={comment.user}   message={comment.message} likes={comment.like}/>
  })}
      
      <div className={styles.bottom__bar}>
        <div className={styles.loading__indicator}></div>
      </div>
    </>
  );
};

export default Messages;
