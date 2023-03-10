import { NewsArticle } from "@/models/NewsArticle";
import Image from "next/image";
import {Card} from 'react-bootstrap'
import placeholderImage from '@/assets/images/griz88.jpg';
import style from '@/styles/NewsArticleEntry.module.css';

interface NewsArticleEntryProps {
    article: NewsArticle, 
}

const NewsArticleEntry = ({article : {title, description, url, urlToImage}}: NewsArticleEntryProps) => {
    
    const validImageUrl = (urlToImage?.startsWith(`https://`) || urlToImage?.startsWith(`https://`)) ? urlToImage : undefined;
    

    return ( 
        <a href={url}>
            <Card className = "h-100">
                <Image
                    src={validImageUrl || placeholderImage}
                    width={500}
                    height={200}
                    alt="News Article Image"
                    className={`card-img-top ${style.image}`}
                />
            
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </a>
     );
}
 


export default NewsArticleEntry;