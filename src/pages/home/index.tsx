import { Main } from "../../assets/styles/global";
import Box1 from "../../components/BoxNews/Box1";
import Box2 from "../../components/BoxNews/Box2";
import { Container } from "./style";

import dbNews from '../../services/news.json';

export default function Home() {
    const firstNews = dbNews.news.slice(0,2);
    const moreNews = dbNews.news.slice(2);

    return(
        <Main>
          <Container>
            <article className="article-header">

              {firstNews.map((item) => (
                  <Box1
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

            <article className="grid-content">
              <div>
                <h1>Mais Recentes</h1>
              </div>

              {moreNews.map((item) => (
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
          </Container>
        </Main>
    )
}
