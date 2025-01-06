import React, { useState } from "react";
import NewsList from "./components/NewsList";
import Questionnaire from "./components/Questionnaire";
import axios from "axios";


const App = () => {
  const [category, setCategory] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (selectedCategory) => {
    const API_KEY = "3bbae3ae5dae47ab853e598b93172d1f" ; 
 
    console.log(API_KEY);
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${API_KEY}`;

    try {
      setLoading(true);
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch news:", err);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Personalized News Aggregator</h1>
      {!category ? (
        <Questionnaire setCategory={(selectedCategory) => {
          setCategory(selectedCategory);
          fetchNews(selectedCategory);
        }} />
      ) : (
        <>
          {loading && <p>Loading...</p>}
          {!loading && articles.length > 0 && <NewsList articles={articles} />}
        </>
      )}
    </div>
  );
};

export default App;