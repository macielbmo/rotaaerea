import { Link } from "react-router-dom";
import { Container } from "./style";

interface BoxProps {
  id: string,
  img: string,
  title: string,
  category: string,
  author: string,
  date: string,
}

export default function Box2(props: BoxProps) {
  return(
    <Link to={`news/${props.id}`}>
      <Container>
          <div className="box-img">
            <img src={props.img} alt={props.title} />
          </div>

          <div className="content">
            <div className="category">
              <p>{props.category}</p>
            </div>

            <h1 className="title">{props.title}</h1>

            <div className="author">
              <p>Por <span>{props.author}</span></p>
              <p>{props.date}</p>
            </div>
          </div>
      </Container>
    </Link>
  )
}
