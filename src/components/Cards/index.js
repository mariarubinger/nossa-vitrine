import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import oculos1 from '../../assets/imgs/oculos1.png';
import fone2 from '../../assets/imgs/fone2.png';
import aguamicelar4 from '../../assets/imgs/aguamicelar4.png';
import notebook6 from '../../assets/imgs/notebook6.png';

function Cards() {

  return (
   
    <Container>
      <br></br>
      <Row className="justify-content-md-center" >
        <Col xs lg="3">
          <Card style={{ width: '240px' , height: '320px'}}>
            <Card.Img variant="top" src={oculos1} height="140px" width="30px" />
            <Card.Body>
              <Card.Title>R$99,90</Card.Title>
              <Card.Text>
                Óculos de sol retrô modelo gatinho com proteção UV
              </Card.Text>
              <Button variant="outline-secondary" href="/detalhesdoproduto">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs lg="3">
          <Card style={{ width: '240px' , height: '320px' }}>
            <Card.Img variant="top" src={fone2} height="140px" width="30px" />
            <Card.Body>
              <Card.Title>
                R$164,90
              </Card.Title>
              <Card.Text>
                Fone De Ouvido Sem Fio Xiaomi Redmi Airdots Preto
              </Card.Text>
              <Button variant="outline-secondary">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs lg="3">
          <Card style={{ width: '240px', height: '320px'}}>
            <Card.Img variant="top" src={aguamicelar4} height="140px" width="30px" />
            <Card.Body>
              <Card.Title>
                R$39,90
              </Card.Title>
              <Card.Text>
                Água Micelar BEYOUNG 220 ml
                
              </Card.Text>
              <Button variant="outline-secondary" position="end">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs lg="3">
          <Card style={{ width: '240px' , height: '320px' }}>
            <Card.Img variant="top" src={notebook6} height="140px" width="30px"/>
            <Card.Body>
              <Card.Title>
                R$1.599,90
              </Card.Title>
              <Card.Text>
                Notebook Multilaser Intel Pentium 4GB Ram Preto
              </Card.Text>
              <Button variant="outline-secondary">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row className="justify-content-md-center" >
        <Col xs lg="3">
          <Card style={{ width: '240px' , height: '320px'}}>
            <Card.Img variant="top" src={oculos1} height="140px" width="30px" />
            <Card.Body>
              <Card.Title>R$99,90</Card.Title>
              <Card.Text>
                Óculos de sol retrô modelo gatinho com proteção UV
              </Card.Text>
              <Button variant="outline-secondary" href="/detalhesdoproduto">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs lg="3">
          <Card style={{ width: '240px' , height: '320px' }}>
            <Card.Img variant="top" src={fone2} height="140px" width="30px" />
            <Card.Body>
              <Card.Title>
                R$164,90
              </Card.Title>
              <Card.Text>
                Fone De Ouvido Sem Fio Xiaomi Redmi Airdots Preto
              </Card.Text>
              <Button variant="outline-secondary">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs lg="3">
          <Card style={{ width: '240px', height: '320px'}}>
            <Card.Img variant="top" src={aguamicelar4} height="140px" width="30px" />
            <Card.Body>
              <Card.Title>
                R$39,90
              </Card.Title>
              <Card.Text>
                Água Micelar BEYOUNG 220 ml
                
              </Card.Text>
              <Button variant="outline-secondary" position="end">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col xs lg="3">
          <Card style={{ width: '240px' , height: '320px' }}>
            <Card.Img variant="top" src={notebook6} height="140px" width="30px"/>
            <Card.Body>
              <Card.Title>
                R$1.599,90
              </Card.Title>
              <Card.Text>
                Notebook Multilaser Intel Pentium 4GB Ram Preto
              </Card.Text>
              <Button variant="outline-secondary">QUERO COMPRAR</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <br></br>
    </Container>
  );
}

export default Cards;
