import { Main } from "../../assets/styles/global";
import Box1 from "../../components/BoxNews/Box1";
import { Container } from "./style";

export default function Home() {
    return(
        <Main>
          <Container>
            <article className="article-header">
              <Box1
                img="https://aeroin.net/wp-content/uploads/2023/10/psaxm-696x464.jpg"
                title="Helicóptero que veio no avião Beluga voa para o casamento do ano em Fernando de Noronha"
                author="Maciel Martins"
                category="Aviação Executiva"
                date="6 de outubro de 2023"/>

              <Box1
                img="https://aeroin.net/wp-content/uploads/2021/07/Aeroporto_da_Pampulha-696x464.jpg"
                title="No próximo domingo, pista do aeroporto da Pampulha será usada por 7 mil corredores"
                author="Maciel Martins"
                category="Aeroportos"
                date="5 de outubro de 2023"/>
            </article>
          </Container>
        </Main>
    )
}
