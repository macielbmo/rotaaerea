import { Main } from "../../assets/styles/global";
import Box2 from "../../components/BoxNews/Box2";
import { Container } from "./style";

export default function Category() {
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

              <Box2
                id="1"
                img="https://aeroin.net/wp-content/uploads/2023/05/ITA-Instituto-Tecnologico-de-Aeronautica-23051701-696x464.jpg"
                title="Ministérios da Educação e da Defesa apresentam relatório de viabilidade para unidade do ITA no Ceará"
                author="Maciel Martins"
                category="Aeroportos"
                date="6 de outubro de 2023"/>

              <Box2
                id="2"
                img="https://aeroin.net/wp-content/uploads/2023/08/Azul-A330neo-696x464.jpg"
                title="Azul terá voos inéditos para o México para atender ao GP de Fórmula 1"
                author="Maciel Martins"
                category="Empresas Aéreas"
                date="6 de outubro de 2023"/>
          </article>
        </Main>
    </Container>
  )
}
