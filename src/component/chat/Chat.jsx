import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import Chatcontainer from "../chatContainer/chatContainer";
import Contacts from "../onlineUsers/onlineUsers";
import Welcome from "../welcome/welcome";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    const checkUser = async () => {
      if (!localStorage.getItem('user')) {
        navigate("/login");
      } else {
        try {
          const user = JSON.parse(localStorage.getItem('user'));
          setCurrentUser(user);
        } 
        catch (error) {
          console.error('Error parsing user data:', error);
          navigate("/login");
        }
      }
    };
  
    checkUser();
  
  }, [navigate]);
  

  useEffect(() => {
    if (currentUser) {
      socket.current = io("http://localhost:5000");
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const mood=await JSON.parse(localStorage.getItem('user')).mood;
          const topic=await JSON.parse(localStorage.getItem('user')).topic;

          if (currentUser.isAvatarImageSet) {
            const response = await axios.post(`http://localhost:5000/getAllUser/${currentUser._id}`,{mood,topic});
            console.log(response);
            setContacts(response.data);
          } else {
            navigate("/setAvatar");
          }
        } catch (error) {
          console.error('Error fetching contacts:', error);
        }
      }
    };
  
    fetchData(); // Call the async function inside useEffect
  
  }, [currentUser,navigate]);
  
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <Chatcontainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
