import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { format } from 'date-fns'

// Style
import { Container } from "./style"

// Components
import Share from "../../components/Share"
import Box2 from '../../components/BoxNews/Box2';

// Img
import gifLoading from "../../assets/img/loading.gif";

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

interface NewsItem {
  id: string;
  url_img: string;
  title: string;
  category_news_name: string;
  created_at: string;
  author: string;
  date: string;
}

export default function News() {
  const [newsData, setNewsData] = useState<NewsItem | null>(null);
  const [moreNews, setMoreNews] = useState<NewsItem[] | null>(null);

  const { id } = useParams();

  // Conexão com a API para buscar pelo conteúdo da noticia
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
  }, [id])

  // Conexão com a API para buscar mais notícias e apresentar no final da pagina
  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `https://rotaaerea-backend.vercel.app`;

        const maxResult = 10;
        const newsId = newsData?.id;
        const categoryId = newsData?.category_news;

        const response = await fetch(`${apiUrl}/newsLimited?limit=${maxResult}&id=${newsId}&idcategory=${categoryId}`, {
          method: 'GET',
          mode: 'cors'
        })

        if (!response.ok) {
          throw new Error('Não foi possível obter os dados.');
        }

        const data: NewsItem[] = await response.json();
        setMoreNews(data);
        // console.log(data)

      } catch (error) {
        console.log(error);
      }
    }

    if(newsData?.category_news != undefined) {
      fetchData()
    }
  }, [id, newsData])

  // Meta-Tags
  const contentString = newsData?.content.split(' ');
  const description = contentString?.slice(0, 20).join(' ');
  const urlPage = window.location.href;

  // Formatar data
  const dateFormated = newsData?.created_at
  ? format(new Date(newsData.created_at), 'dd/MM/yyyy')
  : '';

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
            <Link to={`/category/${newsData.category_news_name}`}><span className="catogory">{newsData.category_news_name}</span></Link>

            <h1 className="title">{newsData.title}</h1>

            <p className="sub-title">{newsData.subtitle}</p>

            <span className="author">Por <strong> {newsData.author} </strong> | publicado em {dateFormated}</span>
          </section>

          <img className="image" src={newsData.url_img} alt={""} />

          <section className="main">
            <div dangerouslySetInnerHTML={{ __html: newsData.content }} />
          </section>

          <section className="footer">
            <Share />
          </section>

          <section className='moreNews'>
            <h2 className='secondTitle'>Mais notícias</h2>

            <div className='box-news'>
              {moreNews?.map((item, index) => (
                <Box2
                  key={index}
                  id={item.id}
                  img={item.url_img}
                  title={item.title}
                  category={item.category_news_name}
                  date={item.date}
                  author={item.author}
                />
              ))}
            </div>
          </section>
        </>
      ): (
        <>
          <div className="loading">
            <img src={gifLoading} alt="Icone de carregamento da pagina" />
          </div>
        </>
      )}



    </Container>
  )
}
