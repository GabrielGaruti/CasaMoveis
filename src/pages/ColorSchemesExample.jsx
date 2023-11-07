import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/react.svg"

function ColorSchemesExample() {
  return (
    <>
    <div style={{display:'flex', flexDirection: "row", justifyContent: "center", background: "#006eff"}}>
      <img src={logo} alt="" height={64} width={64}/>
    </div>
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
          <h1>Casa Móveis</h1>
          </Navbar.Brand>
        
          <Nav className="me-auto">
            
            <Nav.Link href="/sobre">Cadastro Produto</Nav.Link>
            <Nav.Link href="/contato">Entrar</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;