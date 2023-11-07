import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto3(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/1000220744309026876/1171424952856096768/carregador-e-cabo-usb-tipo-c-sobre-fundo-branco-isolado.jpg?ex=655ca180&is=654a2c80&hm=ca2772a2c2cd6c76798724864a4bed5c4fc37bf711bf443ee230e83e18c71fa2&"/>
                <Card.Body>
                <Card.Title>Carregador Iphone</Card.Title>
                <Card.Text>
                <h2>R$ 229,90</h2>
                </Card.Text>
                
                <Card.Text>
                    Disponivel: 32
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto3