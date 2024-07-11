import { useEffect, useState } from "react";
import { ObjArticles } from "../interfaces/objArticles";
import { Container, Row } from "react-bootstrap";
import ArticlesHome from "./ArticlesHome";

const Home = () => {
  const [objArticles, setObjArticles] = useState<ObjArticles>();

  const fetchArticles = async () => {
    try {
      const resp = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );

      if (resp.ok) {
        const objNews = await resp.json();

        setObjArticles(objNews);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <Container className="mt-5">
      <Row className="g-3">
        {objArticles?.results.map((article, index) => (
          <ArticlesHome key={index} article={article} />
        ))}
      </Row>
    </Container>
  );
};
export default Home;
