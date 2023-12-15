import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Main } from "../../assets/styles/global";
import Box2 from "../../components/BoxNews/Box2";
import { Container } from "./style";

import dbNews from '../../services/news.json'

interface NewsItem {
  id: string,
  img: string,
  title: string,
  subtitle: string,
  category: string,
  author: string,
  date: string,
  content: string
}


export default function Category() {
  const [news, setNews] = useState<undefined | NewsItem[]>();
  const { id } = useParams();

  useEffect(() => {
    if(id === 'Notícia') {
      setNews(dbNews.news);
    } else {
      setNews(dbNews.news.filter(item => item.category == id))
    }
  })

  return(
    <Container>
      <div className="title-category">
        <h1>Companhias Aéreas</h1>
      </div>

      <Main>
        <article className="grid-content">
              <div className="title-grid">
                <h1>Mais Recentes</h1>
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
