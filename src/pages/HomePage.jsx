// imports
import React, { useState, useEffect } from "react";
import axios from 'axios';

const HomePage = () => {
  const [quote, setQuote] = useState("");

  //  API axios getting quotes without needing an api key
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://type.fit/api/quotes');
        const quotes = response.data;
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote.text);
      } catch (error) {
        console.error('Error fetching the quote', error);
      }
    };
  // Display quote from API
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Welcome To The Breathing Skills Application</h1>
      <p>Watch, Learn, and practice many different breathing exercies.</p>
      <p>{quote}</p>
    </div>
  );
};



export default HomePage;