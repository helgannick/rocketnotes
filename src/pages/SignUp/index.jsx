import { Container, Form, Background } from "./styles";
import { FiUser,FiMail, FiLock } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder="Login" 
        type="text" 
        icon={FiUser} 
        />

        <Input 
        placeholder="E-mail" 
        type="text" 
        icon={FiMail} 
        />

        <Input
          placeholder="Password"
          type="text"
          icon={FiLock} 
        />

        <Button title="Cadastrar"/>

        <a href="#">
          Voltar para o login

        </a>
          
        

      </Form>

      <Background/>
    </Container>
  );
}
