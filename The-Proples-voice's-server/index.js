const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const port = 3001;

app.use(cors());

app.get("/topHeading", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );
    const data = response.data.articles;
    const newsConstainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * 100 + 1);
      const title = articles.title;
      const description = articles.description;
      const link = articles.url;
      const img = articles.urlToImage;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        description: description,
        link: link,
        img: img,
        date: date,
      };
      return news;
    });
    res.send(newsConstainer);
  } catch (error) {
    res.send(error);
  }
});

app.get("/sports", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );
    const data = response.data.articles;
    const sportsNewsContainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * (80 + 1) + 400);
      const title = articles.title;
      const description = articles.description;
      const link = articles.link;
      const img = articles.urlToImage;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        img: img,
        description: description,
        date: date,
        link: link,
      };

      return news;
    });

    res.send(sportsNewsContainer);
    console.log("Sports container is :-",sportsNewsContainer);
  } catch (error) {
    res.send(error);
  }
});

app.get("/entertainment", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );

    const data = response.data.articles;

    const entertainmentNewsContainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * (80 + 1) + 500);
      const title = articles.title;
      const img = articles.urlToImage;
      const description = articles.description;
      const link = articles.url;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        img: img,
        description: description,
        date: date,
        link: link,
      };

      return news;
    });

    res.send(entertainmentNewsContainer);
  } catch (error) {
    res.send(error);
  }
});

app.get("/general", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );
    const data = response.data.articles;

    const generalNewsContainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * (80 + 1) + 600);
      const title = articles.title;
      const img = articles.urlToImage;
      const description = articles.description;
      const link = articles.url;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        img: img,
        description: description,
        date: date,
        link: link,
      };

      return news;
    });

    res.send(generalNewsContainer);
  } catch (error) {
    res.send(error);
  }
});

app.get("/health", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );

    const data = response.data.articles;

    const healthNewsContainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * (80 + 1) + 700);
      const title = articles.title;
      const img = articles.urlToImage;
      const description = articles.description;
      const link = articles.url;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        img: img,
        description: description,
        date: date,
        link: link
      };

      return news;
    });

    res.send(healthNewsContainer);
  } catch (error) {
    res.send(error);
  }
});

app.get("/science", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );

    const data = response.data.articles;

    const scienceNewsContainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * (80 + 1) + 800);
      const title = articles.title;
      const img = articles.urlToImage;
      const description = articles.description;
      const link = articles.url;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        img: img,
        description: description,
        date: date,
        link: link,
      };

      return news;
    });

    res.send(scienceNewsContainer);
  } catch (error) {
    res.send(error);
  }
});

app.get("/technology", async (req, res) => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=4c7f89a6d6ba4e458b657642da1cb7b7"
    );

    const data = response.data.articles;

    const technologyNewsContainer = data.map((articles) => {
      const newsId = JSON.stringify(Math.random() * (80 + 1) + 900);
      const title = articles.title;
      const img = articles.urlToImage;
      const description = articles.description;
      const link = articles.url;
      const date = articles.publishedAt;

      const news = {
        newsId: newsId,
        title: title,
        img: img,
        description: description,
        date: date,
        link: link,
      };

      return news;
    });

    res.send(technologyNewsContainer);
  } catch (error) {
    res.send(error);
  }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
