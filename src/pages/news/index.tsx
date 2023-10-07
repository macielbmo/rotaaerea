import Share from "../../components/Share"
import { Container } from "./style"

export default function News() {
  return(
    <Container>
      <section className="header">
        <span className="catogory">Aeroportos</span>

        <h1 className="title">Zurich Airport Brasil e empresas aéreas assinam acordo para uso de energia renovável nos aviões</h1>

        <p className="sub-title">Zurich Airport Brasil passa a oferecer nos Aeroportos de Florianópolis e Vitória, energia renovável para aeronaves em solo</p>

        <span className="author">Por <strong> Maciel Martins </strong> 4 de outubro de 2023</span>
      </section>

      <img className="image" src="https://aeroin.net/wp-content/uploads/2023/08/Aeroporto-Florianopolis-Azul-Gol-Latam-23080401-1024x683.jpg" alt="Foto de um aeroporto" />

      <section className="main">
        <p>
        Reduzir as emissões de gás carbônico e a utilização de querosene e diesel são grandes desafios da aviação para tornar o setor mais sustentável. Atenta a necessidade de implantar ações que contribuam para a preservação do meio ambiente, a Zurich Airport Brasil passa a oferecer nos Aeroportos de Florianópolis e Vitória, energia renovável para aeronaves em solo.
<br />
<br />
Entre setembro e início de outubro, Azul, Gol e Latam firmaram contrato com a administradora aeroportuária para usar o serviço. O grupo suíço investiu R$ 17 milhões em equipamentos e sistemas para o programa.
<br />
<br />
Os equipamentos garantem que a parte elétrica e o ar-condicionado das aeronaves em solo funcionem apenas com a energia renovável gerada pelo aeroporto, adquirida no Mercado Livre de Energia e certificada com o I-REC (Certificado Internacional de Energia Renovável).
<br />
<br />
A solução fornece os 400Hz de energia elétrica necessários e ainda o ar pré-condicionado (PCA) para os aviões. Atualmente, é necessário usar geradores externos a diesel (GPU) ou acionar a turbina a querosene do próprio avião (APU), para manter o funcionamento. Ao eliminar o uso das GPUs e APUs, estima-se reduzir a emissão de cerca de 1.300 toneladas de CO2 por ano no terminal de Florianópolis e 1.200 toneladas anuais, no Aeroporto de Vitória.
<br />
<br />
Os sistemas estão sendo instalados nas dez pontes de embarque e desembarque do terminal de Florianópolis, e nas seis pontes do Aeroporto de Vitória e passarão a ser utilizados em dezembro.
<br />
<br />
“Este projeto reforça nosso compromisso genuíno com o meio ambiente. É um importante investimento da Zurich Airport Brasil para tornar a nossa indústria mais sustentável. A adesão das companhias aéreas mostra que estamos no caminho certo para alcançar patamares cada vez mais relevantes no compromisso com a agenda climática,” destaca Ricardo Gesse, CEO da Zurich Airport Brasil.
<br />
<br />
“Todos os esforços conjuntos para a mitigação dos impactos do setor no meio ambiente são muito bem-vindos. A GOL, há mais de 12 anos, tem agido de forma contínua para neutralizar a emissão de Gases de Efeito Estufa (GEEs), incluindo a renovação de sua frota por um modelo de aeronave mais sustentável, as melhorias operacionais e medidas de mercado, como a compensação individual de CO2 pelos clientes e suas rotas 100% carbono neutro: Recife-Fernando de Noronha, temporariamente suspensa em razão de obras na pista, e Congonhas-Bonito. A iniciativa do uso de energia renovável para aeronaves em solo segue uma tendência mundial e, no Brasil, esperamos que em breve outros aeroportos façam investimentos semelhantes”, diz Eduardo Calderon, diretor do Centro de Controle de Operações (CCO) e Engenharia da GOL.
<br />
<br />
Lígia Sato, gerente de Sustentabilidade da LATAM Brasil, reconhece a necessidade de sinergia entre as empresas para a promoção de uma aviação mais sustentável.
<br />
<br />
“Precisamos do envolvimento do setor como um todo para o desenvolvimento de iniciativas que contribuam com a descarbonização da aviação de ponta a ponta. Os esforços de parceiros como a Zurich Airport Brasil, com a utilização de energia renovável para nossas operações em solo, são muito bem-vindos e dão ainda mais impulso para alcançarmos nossas metas sustentáveis”, disse.
<br />
<br />
Para Diogo Youssef, gerente de Engenharia de Operações de Voo e Eficiência de Combustíveis da Azul, essa iniciativa colabora ainda mais com a parceria que já existe da companhia com essas duas bases para reduzir ao máximo o consumo de querosene em solo.
<br />
<br />
“Já adotamos o programa APU Zero nesses dois aeroportos e poder contar com a solução de energia renovável da Zurich Airport Brasil nesse momento de embarque/desembarque dos clientes irá ampliar nossa atuação e melhorar os nossos resultados. Vamos, todos juntos, colaborar para baixar ainda mais o consumo de combustível pelas aeronaves em solo para além dos 73% que já conseguimos apenas com o desligamento do APU em 18 bases pelo país”, explica.
<br />
<br />
Informações da Zurich Airports
        </p>
      </section>

      <section className="footer">
        <Share />
      </section>
    </Container>
  )
}
