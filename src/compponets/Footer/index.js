import styled from 'styled-components'

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: #6E6E6E;
  padding: 20px;
  display: inline-block;
  align-items: left;
  border-top: 0px solid; 
  img {
    width: 58px;
    margin-right: -90px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://github.com/CahMoura/portuguese-quiz">
        <img src="https://i.pinimg.com/564x/e0/b0/33/e0b03391acca8ef7d2adff4cad05ff67.jpg" alt="Logo Meu" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
