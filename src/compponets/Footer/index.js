/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import React from 'react';
// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  padding: 0px;
  display: flex;
  margin: auto;
  margin-right: auto;
  margin-top: 50px;
  width: 100%;
  align-items: auto;
  border-top: 0px solid;
 
  img {
    width: 38px;
    margin: left;
    margin-left: -40px;
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
        <img src="https://i.pinimg.com/564x/e0/b0/33/e0b03391acca8ef7d2adff4cad05ff67.jpg" alt="Logo" />
      </a>
      <p>
        <b>Orgulhosamente criado durante a </b>
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
