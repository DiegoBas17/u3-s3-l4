import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { News } from "../interfaces/news";

const Details = () => {
  const [news, setNews] = useState<News>();
  const params = useParams();
  const id = params.id;
  const data: string = new Date(news?.published_at);
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
      <img
        src={news?.image_url}
        alt={news?.title}
        style={{ height: "20rem" }}
      />
      <a href={news?.url} className="btn btn-info">
        Vai alla fonte
      </a>
      <p>{news?.summary}</p>
      <p>info prese da: {news?.news_site}</p>
      <p></p>
    </Container>
  );
};
export default Details;
