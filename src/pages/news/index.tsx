import { useState, useEffect, ReactHTMLElement } from 'react'
import { useParams } from 'react-router-dom'

import Share from "../../components/Share"
import { Container } from "./style"

export default function News() {
  const [news, setNews] = useState()

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:3001/news/${id}`)
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da notícia')
        }

        const news = await response.json()
        setNews(news)
        console.log(news)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [id])

  return(
    <Container>
      {news ? (
        <>
          <section className="header">
            <span className="catogory">{news.category_news_name}</span>

            <h1 className="title">{news.title}</h1>

            <p className="sub-title">{news.subtitle}</p>

            <span className="author">Por <strong> {news.author} </strong> {news.updated_at}</span>
          </section>

          <img className="image" src={news.url_image} alt={news.image_description} />

          <section className="main">
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </section>

          <section className="footer">
            <Share />
          </section>
        </>
      ): null}
    </Container>
  )
}
