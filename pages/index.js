/* eslint-disable func-names */
import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
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
          <Widget
            as={motion.section}
            transition={{ delay: 0, duration: 0.5 }}
            variants={{
              show: { opacity: 1, y: '0' },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
          >
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
                  placeholder="Say your name"
                  value={name}
                  maxLeght={15}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Play ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Others Quiz in Portuguese</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={LinkQuiz}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/CahMoura?tab=repositories" />
    </QuizBackground>
  );
}
