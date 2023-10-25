import React from "react";
import ScrollToTop from "react-scroll-up"
import {IoSend} from "react-icons/io5"


const Chat = () => {
  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <h1 className="heading">
            
          </h1>
          <a href="/">
            <button className="btns">End chat</button>
          </a>
        </div>
        <ScrollToTop className="chatBox">
          {/* {messages.map((item, i) => (
            <Message
              key={i}
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
            />
          ))} */}
        </ScrollToTop>
        <div className="inputBox">
          <input
            // onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
            type="text"
            placeholder="Type here...."
            id="chatInput"
          />
          <button onClick={"send"} className="sendbtn">
            <img className="logoimg" src={<IoSend/>} alt="send" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
