import { Container, Profile } from './styles';

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
        src='https://github.com/helgannick.png'
        alt='Foto do usuário'
         />

         <div>
          <span>Bem-vindo</span>
          <strong>Marcos Barbosa</strong>
         </div>
      </Profile>
    </Container>
  )
}
