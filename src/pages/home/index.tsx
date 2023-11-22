import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { Main } from "../../assets/styles/global";
import Box1 from "../../components/BoxNews/Box1";
import Box2 from "../../components/BoxNews/Box2";
import { Container } from "./style";

export default function Home() {
  const [newsData, setNewsData] = useState([])
  const [newsDestaque, setNewsDestaque] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/news`, {
      method: 'GET'
    })
      .then(async (response) => {
        const json = await response.json()

        setNewsData(json.filter((_, index) => index >= 2))
        setNewsDestaque(json.slice(0, 2));
      })
      .catch((error) => {
        console.log('erro', error)
      })
  }, [])

    return(
        <Main>
          <Container>
            <article className="article-header">

              {newsDestaque.map((item) => (
                  <Box1
                    key={item.id}
                    id={item.id}
                    img={item.url_image}
                    title={item.title}
                    category={item.category_news_name}
                    date={item.update_at}
                    author={item.author}
                  />
              ))}
            </article>

            <article className="grid-content">
              <div>
                <h1>Mais Recentes</h1>
              </div>

              {newsData.map((item) => (
                <Box2
                  key={item.id}
                  id={item.id}
                  img={item.url_image}
                  title={item.title}
                  category={item.category_news_name}
                  date={item.update_at}
                  author={item.author}
                />
              ))}
            </article>
          </Container>
        </Main>
    )
}
