import React, { useEffect, useState } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = "065fc01247dd4bbbb771435cbaa92929";

  // search bar data fetch
  const getData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
    setIsLoading(false);
  };
  // rendering process of url when user refresh the page
  useEffect(() => {
    getData();
  }, []);

  const filterBtn = [
    { id: 1, btnValue: "sports", label: "Sports" },
    { id: 2, btnValue: "politics", label: "Politics" },
    { id: 3, btnValue: "enterainment", label: "Enterainment" },
    { id: 4, btnValue: "health", label: "Health" },
    { id: 5, btnValue: "fitness", label: "Fitness" },
  ];
  // search onchange handleInput

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // user input process
  const userInput = (e) => {
    setSearch(e.target.value);
    getData();
  };
  return (
    <>
    {
        isLoading ? <p>loading...</p> : <div>
      {/* NAV BAR */}
      <nav>
        <div>
          <h1>Trending News</h1>
        </div>
        <ul>
          <a>All News</a>
          <a>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handleInput}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className="head">Stay Update with TrendyNews</p>
      </div>

      {/* CATEGORY  */}
      <div className="categoryBtn">
        
       {filterBtn.map((btn)=>{
        return <button onClick={userInput} value={btn.btnValue}>{btn.label}
        </button>
       })}
      </div>

      {/* Card component */}
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
    }
    </>
  );
};

export default Newsapp;
