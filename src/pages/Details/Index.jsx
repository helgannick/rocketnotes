import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";

export function Details() {

  return (
    <Container>

      <Header/>

      <Section title='Links úteis'>
        <Links>
          <li> < a href="">https://www.rocketseat.com.br </a></li>
          <li> < a href="">https://www.rocketseat.com.br </a></li>
          
        </Links>

      </Section>

      <Section title='Marcadores'>
        <Tags title='express'/>
        <Tags title='nodejs'/>

      </Section>


      

     <Button title='Voltar'/>

    </Container>
       

  );
}
