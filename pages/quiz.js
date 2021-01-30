/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/compponets/Widget';
import QuizBackground from '../src/compponets/QuizBackground';
import GitHubCorner from '../src/compponets/GitHubCorner';
import LoadingWidget from '../src/compponets/LoadingWidget';
import QuizContainer from '../src/compponets/QuizContainer';
import Button from '../src/compponets/Button';
import AlternativesForm from '../src/compponets/AlternativesForm';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {'You got it right: '}
          {results.reduce((somatoriaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            if (isAcerto) {
              return somatoriaAtual + 1;
            }
            return somatoriaAtual;
          }, 0)}
          {' of 16 '}
        </h3>
      </Widget.Header>

      <Widget.Content>

        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`Question 0${index + 1}: `}
              {result === true
                ? 'Right'
                : 'Wrong'}
            </li>
          ))}

        </ul>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Question ${questionIndex + 1} of ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Description"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ marginRight: '12px' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => {
                    setSelectedAlternative(true);
                    setSelectedAlternative(alternativeIndex);
                  }}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirm
          </Button>
          {isQuestionSubmited && isCorrect && <p>Awesome 😎</p>}
          {isQuestionSubmited && !isCorrect && <p>Maybe in the Next!! ❌</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 4.5 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} /> }
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/CahMoura" />
    </QuizBackground>
  );
}