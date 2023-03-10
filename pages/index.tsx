import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NewsArticle, NewsResponse } from '@/models/NewsArticle'
import { env } from 'process'
import NewsArticleEntry from '@/components/newsArticleEntry'
import NewsArticleGrid from '@/components/NewsArticleGrid'

interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],

}

// <> means type definition
export const getServerSideProps : GetServerSideProps<BreakingNewsPageProps> =async () => {
  // 3 sec delay
  // await new Promise(resolve => setTimeout(resolve, 3000));

  const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();

  return{
    props: { newsArticles: newsResponse.articles }
  }
}

export default function BreakingNewsPage({newsArticles}: BreakingNewsPageProps) {
  return (
    <>
      <Head>
        <title key="title">Breaking News</title>
      </Head>

      <main>
        <h1>Breaking News</h1>
        <NewsArticleGrid articles={newsArticles} />
      </main>
      
    </>
  )
}
