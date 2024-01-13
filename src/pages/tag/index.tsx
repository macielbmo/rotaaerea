import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";

import { Main } from "../../assets/styles/global";
import Box2 from "../../components/BoxNews/Box2";
import { Container } from "./style";

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
  tags: Array<string>,
  status: true,
  updated_at: string,
  created_at: string,
}

export default function Tag() {
  const [news, setNews] = useState<undefined | NewsItem[]>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `https://rotaaerea-backend.vercel.app/`;

        const response = await fetch(`${apiUrl}/news`, {
          method: 'GET',
          mode: 'cors'
        })

        if (!response.ok) {
          throw new Error('Não foi possível obter os dados.');
        }

        const data: NewsItem[] = await response.json();

        setNews(data.filter(item => id && item.tags.map((tag: string) => tag.toLowerCase()).includes(id.toLowerCase())));

        console.log(data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id])

  // useEffect(() => {
  //   console.log(id)
  //   setNews(dbNews.news.filter(item => item.tags.some(tag => tag.toLowerCase() == id?.toLowerCase())));
  // }, [id])

  return(
    <Container>
      <div className="title-tag">
        <h1>{id}</h1>
      </div>

      <Main>
        <div className="box-main">
          <article className="grid-content">
                <div className="title-grid">
                  {news && news?.length < 1 ? (
                    <p>Não há noticias relacionadas a tag <strong>{id}</strong>...</p>
                  ) : (
                    <h1>Mais Recentes</h1>
                  )}
                </div>

                {news && news.map((item) => (
                  <Box2
                    key={item.id}
                    id={item.id}
                    img={item.url_img}
                    title={item.title}
                    category={item.category_news_name}
                    date={item.date}
                    author={item.author}
                  />
                ))}
            </article>
          </div>
        </Main>
    </Container>
  )
}
