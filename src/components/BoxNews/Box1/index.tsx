import { Container } from "./style";

interface BoxProps {
  img: string,
  title: string,
  category: string,
  author: string,
  date: string,
}

export default function Box1(props: BoxProps) {
  return(
    <Container>
      <img src={props.img} alt={props.title} />

      <div className="content">
        <div className="category">
          <p>{props.category}</p>
        </div>

        <h1 className="title">{props.title}</h1>

        <div className="author">
          <p>{props.author}</p>
          <span>{props.date}</span>
        </div>
      </div>
    </Container>
  )
}
