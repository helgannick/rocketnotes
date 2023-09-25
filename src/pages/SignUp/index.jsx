import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { FiUser,FiMail, FiLock } from "react-icons/fi";



import { Link } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  function handleSignUp() {
    
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }
  }
  




  return (

   


    <Container>

      <Background/>
     

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder="Login" 
        type="text" 
        icon={FiUser}
        onChange={event =>setName(event.target.value)} 
        />
        
        

        <Input 
        placeholder="E-mail" 
        type="email" 
        icon={FiMail} 
        onChange={event =>setEmail(event.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={event =>{setPassword(event.target.value)}}
        />
        
        <Button title="Cadastrar" onClick={handleSignUp} />
       

        <Link to='/'>
          Voltar para o login

        </Link>
          
        

      </Form>

     
    </Container>
  );
}
