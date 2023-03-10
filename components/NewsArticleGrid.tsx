import { NewsArticle } from "@/models/NewsArticle";
import {Row, Col} from 'react-bootstrap';
import NewsArticleEntry from "./newsArticleEntry";

interface NewsArticleGridProps {
    articles: NewsArticle[],
}

const NewsArticleGrid = ({articles}: NewsArticleGridProps) => {
    return ( 
        <Row xs={1} sm={2} xl={3} className="g-4">
            {articles.map(article => (
                <Col key={article.url}>
                    <NewsArticleEntry article = {article} />
                </Col>
            ))}
        </Row>
     );
}
 

export default NewsArticleGrid;