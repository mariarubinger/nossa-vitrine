import React from 'react';
//import { Link } from 'react-router-dom';
import { Button, Col, Container, Form } from 'react-bootstrap'
import Header from '../../components/Header';
import {
  Title,
} from './styles';


function CadastroDeProduto() {
  return (
    <>
      <Header />

      <Title>Cadastre o seu produto aqui</Title>

      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control placeholder="Nome do anunciante" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type="number" placeholder="Telefone" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control type="text" placeholder="Cidade" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Imagem do Produto" />
          </Form.Group>

            <Form.Check
              type="radio"
              label="Produto Novo"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Produto Usado"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
  
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control placeholder="Detalhes do Produto" />
            </Form.Group>
          </Form.Row>

          <Button variant="outline-secondary" type="submit">
            CADASTRAR PRODUTO
          </Button>
        </Form>
      </Container>
    </>
  );
}

/* 
Nome do anunciante:
Email:
Telefone:
Nome do Produto:
Imagem:
Valor:
Detalhes do Produto:
Cidade:
Novo ou usado:
 */
export default CadastroDeProduto;
