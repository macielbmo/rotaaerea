import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Components
import Share from "../../components/Share"
import { Container } from "./style"

// Interface
interface NewsItem {
  id: string,
  title: string,
  subtitle: string,
  category_news: string,
  category_news_name: string
  url_img: string,
  img_description: string,
  author: string,
  date: string,
  content: string,
  content_id: string,
  news_source: string,
  schedule: string
  url_source: string
  tags: string,
  status: true,
  updated_at: string,
  created_at: string,
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsItem | null>(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `https://rotaaerea-backend.vercel.app`;

        const response = await fetch(`${apiUrl}/news/${id}`, {
          method: 'GET'
        })

        if (!response.ok) {
          throw new Error('Não foi possível obter os dados.');
        }

        const data = await response.json();
        setNewsData(data);
        // console.log(`Response: ${JSON.stringify(data)}`)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  // Meta-Tags
  const contentString = newsData?.content.split(' ');
  const description = contentString?.slice(0, 20).join(' ');
  const urlPage = window.location.href;

  return(
    <Container>
      <Helmet>
        <title>{newsData?.title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={newsData?.author} />

        <meta property="og:title" content={newsData?.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={newsData?.url_img} />
        <meta property="og:url" content={urlPage} />
      </Helmet>

      {newsData ? (
        <>
          <section className="header">
            <span className="catogory">{newsData.category_news_name}</span>

            <h1 className="title">{newsData.title}</h1>

            <p className="sub-title">{newsData.subtitle}</p>

            <span className="author">Por <strong> {newsData.author} </strong> {newsData.created_at}</span>
          </section>

          <img className="image" src={newsData.url_img} alt={""} />

          <section className="main">
            <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
          </section>

          <section className="footer">
            <Share />
          </section>
        </>
      ): (
        <p>Dados não encontrados ou carregados...</p>
      )}
    </Container>
  )
}
