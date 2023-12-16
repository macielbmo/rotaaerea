import { useEffect, useState,  } from "react";
import { useParams } from "react-router-dom";

import { Main } from "../../assets/styles/global";
import Box2 from "../../components/BoxNews/Box2";
import { Container } from "./style";

import dbNews from"../../services/news.json";

interface NewsItem {
  id: string,
  img: string,
  title: string,
  subtitle: string,
  category: string,
  author: string,
  date: string,
  tags: string[],
  content: string
}

export default function Tag() {
  const [news, setNews] = useState<undefined | NewsItem[]>();
  const { id } = useParams();

  useEffect(() => {
    console.log(id)
    setNews(dbNews.news.filter(item => item.tags.some(tag => tag.toLowerCase() == id?.toLowerCase())));
  }, [id])

  return(
    <Container>
      <div className="title-tag">
        <h1>{id}</h1>
      </div>

      <Main>
        <article className="grid-content">
              <div className="title-grid">
                {news && news?.length < 1 ? (
                  <h3>Não há noticias referentes a essa tag...</h3>
                ) : (
                  <h1>Mais Recentes</h1>
                )}
              </div>

              {news && news.map((item) => (
                <Box2
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  category={item.category}
                  date={item.date}
                  author={item.author}
                />
              ))}
          </article>
        </Main>
    </Container>
  )
}
