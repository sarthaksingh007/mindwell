import React from "react";
import { FiSearch } from "react-icons/fi";
import {BsThreeDotsVertical} from "react-icons/bs"

const User = () => {
  // const [users, setusers] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/getOnlineUser', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         credentials: 'include' // For sending cookies (if needed)
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       setusers(data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <section className="user">
      <div className="history">
        <div class="wrapper">
          <div class="icon">
            <FiSearch />
          </div>
          <input class="input" placeholder="Search"></input>
        </div>
        <ul>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
          <li>
            <div className="data">
              <div>
                <h3>sarthak</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  velit.
                </p>
              </div>
              <BsThreeDotsVertical/>
            </div>
          </li>
        </ul>
      </div>
      <div className="userchat">
        <h1>Oops! You are disconnected.</h1>
        <button className="">New Chat</button>
      </div>
    </section>
  );
};

export default User;
