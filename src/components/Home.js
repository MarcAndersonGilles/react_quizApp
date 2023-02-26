import React, { useState } from 'react';
import "../sass/scss/home.scss";

import goku from '../assets/goku.jpg';
import onepiece from '../assets/onepiece.jpg';
import ichigo from '../assets/ichigo.png';
import naruto from '../assets/naruto.png';
import natsu from '../assets/natsu.png';
import tanjiro from '../assets/tanjiro.png';
import big3 from '../assets/big3.jpg';
 

function Home() {
  const questions = [
		{
			questionText: 'Qui peut battre Goku?',
      imageUrl: goku,
			answerOptions: [
				{ answerText: 'Saitama', isCorrect: true },
				{ answerText: 'Luffy', isCorrect: false },
				{ answerText: 'Ichigo', isCorrect: false },
				{ answerText: 'Naruto', isCorrect: false },
			],
		},
		{
			questionText: 'Quand est-ce que One piece est sortie en anime?',
      imageUrl: onepiece,
			answerOptions: [
				{ answerText: '1999', isCorrect: true },
				{ answerText: '1998', isCorrect: false },
				{ answerText: '1997', isCorrect: false },
				{ answerText: '1996', isCorrect: false },
			],
		},
		{
			questionText: 'Ichigo Kurosaki a combien de races différentes en lui?',
      imageUrl: ichigo,
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '5', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: true },
			],
		},
		{
			questionText: 'Naruto Uzumaki est devenu lequel Hokage?',
      imageUrl: naruto,
			answerOptions: [
				{ answerText: ' Le huitième Hokage', isCorrect: false },
				{ answerText: 'Le septième Hokage', isCorrect: true },
				{ answerText: 'Le sixième Hokage', isCorrect: false },
				{ answerText: 'Le cinquième Hokage', isCorrect: false },
			],
		},
    {
			questionText: 'Quel est le but premier but de Natsu Dragnir dans la série Fairy Tail',
      imageUrl: natsu,
			answerOptions: [
				{ answerText: 'Retrouver son père', isCorrect: false },
				{ answerText: 'Tuer un dragon', isCorrect: false },
				{ answerText: 'Rejoindre la guilde de Fairy Tail ', isCorrect: false },
				{ answerText: 'Se faire des amis', isCorrect: true },
			],
		},
    {
			questionText: 'Quel est le but premier but de Natsu Dragnir dans la série Demon Slayer',
      imageUrl: tanjiro,
			answerOptions: [
				{ answerText: 'Guérir sa soeur', isCorrect: true },
				{ answerText: 'Tuer le démon qui a tuer sa famille', isCorrect: false },
				{ answerText: 'Devenir un tueur de démon ', isCorrect: false },
				{ answerText: 'Devenir le plus fort au monde', isCorrect: false },
			],
		},
    {
			questionText: 'Quels animés font partis "du Big 3" ',
      imageUrl: big3,
			answerOptions: [
				{ answerText: 'One piece, Naruto, Dragon Ball', isCorrect: false },
				{ answerText: 'My Hero Academia, Black Clover, Demon Slayer', isCorrect: false },
				{ answerText: 'One Piece, Bleach, Naruto', isCorrect: true },
				{ answerText: 'Black Clover, Demon Slayer, One Piece', isCorrect: false },
			],
		},
	];
  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);


	const handleAnswerOptionClick = (isCorrect, answerText) => {
		if (isCorrect) {
			setScore(score + 1);
		} else {
			setWrongAnswers([...wrongAnswers, { question: questions[currentQuestion].questionText, answer: answerText }]);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  

  return (
    <div className='quiz-container'>
    {showScore ? (
      <div className='quiz'>
        <p>Tu as réussi {score} sur {questions.length} questions</p>
  <p>questions échouées :</p>
  <ul className='listReponsesFauses'>
    {wrongAnswers.map((answer, index) => (
      <li key={index} className='wrong-answer'>{answer.question} - {answer.answer}</li>
    ))}
  </ul>
  <button className='recommencer-button' onClick={() => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
    setWrongAnswers([]);
  }}>
    Recommencer
  </button>
</div>
    ) : (
      <>
      <div className='quizContainerC'>

        <div className='quiz-section'>
          <div className='quiz-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='quiz-image'>
            <img className='imageQuestion' src={questions[currentQuestion].imageUrl} alt='Question' />
          </div>
          <div className='quiz-text'>{questions[currentQuestion].questionText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerOptions.map((answerOption) => (
            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>

        </div>
      </>
    )}
  </div>
  );
}

export default Home;
