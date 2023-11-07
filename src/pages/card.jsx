

import DataBase from "../db.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Card1() {
  return (
    <div className="d-flex p-2 justify-content-around">
      {DataBase.map((DataBase) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src = "https://cdn.discordapp.com/attachments/1000220744309026876/1171438008562618408/planta-de-borracha-em-um-aparador-de-madeira.jpg?ex=655cada9&is=654a38a9&hm=640265359689f77585b6a11b67afd0bef9afeb556088dc28b024ef63474c96fc&" />
              <Card.Body>
                <Card.Title>Móveis</Card.Title>
                
                <Card.Text>
                  <h6>R$2000,00 - R$8000,00</h6>
                </Card.Text>
                <Button variant="success" >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default Card1;
