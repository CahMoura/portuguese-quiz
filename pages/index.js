/* eslint-disable func-names */
import React from 'react';
import { useRouter } from 'next/router';
import QuizContainer from '../src/compponets/QuizContainer';
// eslint-disable-next-line import/no-unresolved
import LinkQuiz from '../src/compponets/LinkQuiz';
import db from '../db.json';
import Widget from '../src/compponets/Widget';
import Input from '../src/compponets/Input';
import GitHubCorner from '../src/compponets/GitHubCorner';
import QuizBackground from '../src/compponets/QuizBackground';
import Footer from '../src/compponets/Footer';
import Button from '../src/compponets/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (

    // eslint-disable-next-line react/jsx-filename-extension
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name${name}`);
            }}
            >
              <Input
                name="UserName"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Say your name and play the game!"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Play ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Others Quiz</h1>

            <LinkQuiz
              href="https://quiz-pokemon.vercel.app/"
              target="_blank"
            >
              Quiz Pokemon
            </LinkQuiz>
            <LinkQuiz
              href="https://aluraquiz-coffee.leonardot07.vercel.app/"
              target="_blank"
            >
              Quiz Coffe
            </LinkQuiz>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/CahMoura?tab=repositories" />
    </QuizBackground>
  );
}
