import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../../asset/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userData = await JSON.parse(
          localStorage.getItem('user')
        );
        if (userData && userData.name) {
          setUserName(userData.name);
        }
      } catch (error) {
        console.error('Error fetching username:', error);
      }
    };
  
    fetchUserName();
  
  }, []);
  
  
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #946ef5;
  }
`;
