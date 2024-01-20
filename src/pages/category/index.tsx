import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Styles
import { Main } from "../../assets/styles/global";
import { Container } from "./style";

// Components
import Box2 from "../../components/BoxNews/Box2";

// Img
import gifLoading from "../../assets/img/loading.gif";

// Interfaces
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

export default function Category() {
  const [news, setNews] = useState<undefined | NewsItem[]>();
  const { id } = useParams();

  // Busca pelas noticias e filtrar pela categoria
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
        // console.log(data)

        const news = data.filter(item => item.category_news_name === id)
        setNews(news);
        // console.log(news)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [id])

  return(
    <Container>
      <div className="title-category">
        <h1>{id}</h1>
      </div>

      <Main>
        <div className="box-main">
          {news? (
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
          ) : (
            <>
              <div className="loading">
                <img src={gifLoading} alt="Icone de carregamento da pagina" />
              </div>
            </>
          )}
        </div>
      </Main>
    </Container>
  )
}
