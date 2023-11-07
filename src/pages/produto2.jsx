import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto2(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/1000220744309026876/1171424821939281980/P6YSG40.jpg?ex=655ca161&is=654a2c61&hm=8d19b372837af049b451361acc84d151a6274a34622d6da7718bc008ff208007&"/>
                <Card.Body>
                <Card.Title>Samsumg S23 100GB</Card.Title>
                <Card.Text>
                <h2>R$ 2999,99</h2>
                </Card.Text>
                
                <Card.Text>
                    Disponivel: 65
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto2