import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1000220744309026876/1171437978405589013/renderizacao-de-cozinha-contemporanea-3d.jpg?ex=655cada2&is=654a38a2&hm=3b349a0c7a6c0ecdaf52b20c05d3315acfea0aae4b02f6933abadef0ae175ad2&" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Os melhores preços do mercado</h3>
          <p>Qualidade e Agilidade na entrega!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1000220744309026876/1171438002820624414/interior-plano-vazio-com-elementos-de-decoracao.jpg?ex=655cada8&is=654a38a8&hm=ebca42c0ae64c2736c9f589f82a991bc66200151e1162a264300ea068c8525e3&" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>A loja com a maior variedade de produtos!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.discordapp.com/attachments/1000220744309026876/1171438008562618408/planta-de-borracha-em-um-aparador-de-madeira.jpg?ex=655cada9&is=654a38a9&hm=640265359689f77585b6a11b67afd0bef9afeb556088dc28b024ef63474c96fc&" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>A melhor qalidade do mercado você encontra aqui</h3>
          <p>
            Encontre tudo o que quiser no melhor preço.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;