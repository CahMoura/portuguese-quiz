import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/compponets/Widget'
import Footer from '../src/compponets/Footer'
import GitHubCorner from '../src/compponets/GitHubCorner'
import QuizBackground from '../src/compponets/QuizBackground'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
}
`;

/*const QuizBackground = styled.div`
background-image: url(${db.bg});
flex: 1;
backgound-size: cover;
background-position: center;
`;*/


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
        <Widget.Header>
          <h1>Brazilian Portuguese</h1>
          </Widget.Header>
        <Widget.Content>
         
          <p>Awser the questions and have fun</p>
        </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
        <h1>Brazilian Portuguese</h1>
          <p></p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/CahMoura?tab=repositories"/>
    </QuizBackground>
  );
}
