import { useState, useEffect, ReactHTMLElement } from 'react'
import { useParams } from 'react-router-dom'

import Share from "../../components/Share"
import { Container } from "./style"

import dbNews from '../../services/news.json'
import Item from '../../components/Header/Sidebar/Item'

export default function News() {
  const { id } = useParams();

  const news = dbNews.news.find(item => item.id == id)

  return(
    <Container>
      {news ? (
        <>
          <section className="header">
            <span className="catogory">{news.category}</span>

            <h1 className="title">{news.title}</h1>

            <p className="sub-title">{news.subtitle}</p>

            <span className="author">Por <strong> {news.author} </strong> {news.date}</span>
          </section>

          <img className="image" src={news.img} alt={""} />

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
