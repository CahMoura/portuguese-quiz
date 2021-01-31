/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components';
import React from 'react';
// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  padding: 0px;
  display: flex;
  margin: auto;
  margin-right: auto;
  margin-top: 0px;
  width: 100%;
  align-items: auto;
  border-top: 0px solid;
 
  img {
    width: 60px;
    margin: left;
    margin-left: -50px;
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
    </FooterWrapper>
  );
}
