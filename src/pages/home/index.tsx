import { useEffect, useState } from "react";

// Estilização
import { Main } from "../../assets/styles/global";
import { Container } from "./style";

// Components
import Box1 from "../../components/BoxNews/Box1";
import Box2 from "../../components/BoxNews/Box2";

// Interface
interface NewsItem {
  id: string;
  url_img: string;
  title: string;
  category_news_name: string;
  created_at: string;
  author: string;
  date: string;
}

interface CustomDateTimeFormatOptions {
  day: '2-digit';
  month: '2-digit';
  year?: 'numeric' | '2-digit';
  hour: '2-digit';
  minute: '2-digit';
}

export default function Home() {
  const [newsData, setNewsData] = useState<NewsItem[] | null>(null);

  const options: CustomDateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const apiUrl = `https://rotaaerea-backend.vercel.app`;

        const response = await fetch(`${apiUrl}/news`, {
          method: 'GET',
          mode: 'cors'
        })

        if (!response.ok) {
          throw new Error('Não foi possível obter os dados.');
        }

        const data: NewsItem[] = await response.json();
        setNewsData(data);
        // console.log(data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

    const firstNews = newsData?.slice(0, 2) || [];
    const moreNews = newsData?.slice(2) || [];

    return(
        <Main>
          <Container>
            <article className="article-header">

              {firstNews?.map((item, index) => (
                  <Box1
                    key={index}
                    id={item.id}
                    url_img={item.url_img}
                    title={item.title}
                    category={item.category_news_name}
                    date={new Intl.DateTimeFormat('pt-BR', options).format(new Date(item.created_at))}
                    author={item.author}
                  />
              ))}
            </article>

            <article className="grid-content">
              <div>
                <h1>Mais Recentes</h1>
              </div>

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
            </article>
          </Container>
        </Main>
    )
}
