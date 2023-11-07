    import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/1000220744309026876/1171424513645363240/composicao-elegante-de-smartphone.jpg?ex=655ca118&is=654a2c18&hm=5b77a6104b9bbbc5218876beb85e6ae7435d493f9f2b145b1037597f8038b35f&"/>
                <Card.Body>
                <Card.Title>Iphone 15 256gb</Card.Title>
                <Card.Text>
                <h2>R$ 7999,99</h2>
                </Card.Text>              
                <Card.Text>
                    Disponivel: 45
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1