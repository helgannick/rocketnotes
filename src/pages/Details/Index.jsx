import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { Container, Content, Links } from "./styles.js";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            officia facilis dolor aliquam dolores illo quo maiores eligendi
            dicta, minus pariatur autem excepturi esse, beatae deleniti
            perspiciatis vitae sit fugit! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptates ab minima numquam mollitia
            nostrum quod dignissimos qui maxime quia, soluta necessitatibus
            illum, accusantium laborum odit itaque rerum exercitationem
            architecto deserunt. Lorem ipsum dolor sit amet 
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                {" "}
                <a href="">https://www.rocketseat.com.br </a>
              </li>
              <li>
                {" "}
                <a href="">https://www.rocketseat.com.br </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tags title="express" />
            <Tags title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
