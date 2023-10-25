import React, { useEffect, useState } from 'react'
import '../Quote.css';
import axios from 'axios';
const Quote = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [imageUrl, setImageUrl] = useState('https://random.imagecdn.app/1500/750');

    const qouteAPI = async () => {
      let arrayofQoute = [];
      try {
        const data = await axios.get("https://api.quotable.io/random");
        arrayofQoute = data.data;
        setImageUrl(`https://random.imagecdn.app/1500/750?${new Date().getTime()}`);
        
      } catch (error) {
        console.log(error);
      }
  
      try {
        setQuote(arrayofQoute.content);
        setAuthor(arrayofQoute.author);
        
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      qouteAPI();
    }, [])
    return (
      <div className="App" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="quoteBox">
          <div className="container"  >
            <div className="quoteButton">
              {" "}
             
            <div className="quote"><h2>{quote}</h2></div>
            <div className="author">{author}</div>
            <button onClick={qouteAPI}>Refresh</button></div>
          </div>
        </div>
      </div> );
}

export default Quote
