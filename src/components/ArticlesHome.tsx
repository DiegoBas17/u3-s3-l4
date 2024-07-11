import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Result } from "../interfaces/objArticles";

interface FunctionalComponentProps {
  article: Result;
}

const ArticlesHome = ({ article }: FunctionalComponentProps) => {
  return (
    <Col md="6">
      <Link to={"/details/" + article.id} className="text-decoration-none">
        <div className="bg-info text-center p-3">
          <img
            src={article.image_url}
            alt={article.title}
            style={{ height: "10rem", width: "10rem" }}
          />
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      </Link>
    </Col>
  );
};
export default ArticlesHome;
