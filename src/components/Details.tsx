import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { News } from "../interfaces/news";

const Details = () => {
  const [news, setNews] = useState<News>();
  const params = useParams();
  const id = params.id;
  const data = news && new Date(news?.published_at).toDateString();

  const fetchArticles = async () => {
    try {
      const resp = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${id}`
      );

      if (resp.ok) {
        const objNews = await resp.json();

        setNews(objNews);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container>
      <h1>{news?.title}</h1>
      <div className="d-flex justify-content-between">
        <Link to="/">
          <Button>torna alla home</Button>
        </Link>
        <img
          src={news?.image_url}
          alt={news?.title}
          style={{ height: "20rem", marginInline: "auto" }}
        />
        <a href={news?.url}>
          <Button>Vai alla fonte</Button>
        </a>
      </div>
      <p>{news?.summary}</p>
      <p>info prese da: {news?.news_site}</p>
      <p>{data}</p>
    </Container>
  );
};
export default Details;
