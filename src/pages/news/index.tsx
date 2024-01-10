import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

// Components
import Share from "../../components/Share"
import { Container } from "./style"

// Interface
interface NewsItem {
author: string;
category: string;
category_news_name: string;
content: string;
created_at: string;
id: string;
image_description: string;
news_source: string;
schedule: string;
status: string;
subtitle: string;
tags: string;
title: string;
updated_at: string;
url_image: string;
url_source: string
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
        console.log(`Response: ${JSON.stringify(data)}`)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return(
    <Container>
      {newsData ? (
        <>
          <section className="header">
            <span className="catogory">{newsData.category_news_name}</span>

            <h1 className="title">{newsData.title}</h1>

            <p className="sub-title">{newsData.subtitle}</p>

            <span className="author">Por <strong> {newsData.author} </strong> {newsData.created_at}</span>
          </section>

          <img className="image" src={newsData.url_image} alt={""} />

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
