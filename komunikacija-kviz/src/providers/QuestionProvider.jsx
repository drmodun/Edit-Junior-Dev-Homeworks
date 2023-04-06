import { useState } from "react";
import { useContext, createContext } from "react";

const defaultContext = {
    questions: [],
    setQuestions: () => { },
    currentQuestion: {},
    setCurrentQuestion: () => { },
    currentQuestionIndex: 0,
    setCurrentQuestionIndex: () => { },
    currentCorrectlyAnswered: 0,
    setCurrentCorrectlyAnswered: () => { },
    category: "",
    setCategory: () => { },
    difficulty: "",
    setDifficulty: () => { },
};


const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState(defaultContext.questions);
    const [currentQuestion, setCurrentQuestion] = useState(defaultContext.currentQuestion);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(defaultContext.currentQuestionIndex);
    const [currentCorrectlyAnswered, setCurrentCorrectlyAnswered] = useState(defaultContext.currentCorrectlyAnswered);

    const genereateQuestions = async (category, difficulty) => {
        const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        const response = await fetch(url);
        const data = await response.json();
        const questions = data.results.map((question) => {
            const correctAnswer = question.correct_answer;
            const incorrectAnswers = question.incorrect_answers;
            const allAnswers = [...incorrectAnswers, correctAnswer];
            const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
            return {
                ...question,
                allAnswers: shuffledAnswers,
                correctAnswer,
            };
        });
        setQuestions(questions);
        setCurrentQuestion(questions[0]);
        setCurrentQuestionIndex(0);
        setCurrentCorrectlyAnswered(0);
    };
    
    const updateQuestion = () => {
        const nextQuestion = questions[currentQuestionIndex + 1];
        if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        else{
            alert("You have completed the quiz with "  + currentCorrectlyAnswered + " correct answers" );
        }
    };

    const updateCorrectlyAnswered = () => {
        setCurrentCorrectlyAnswered(currentCorrectlyAnswered + 1);
    };





    return (
        <QuestionContext.Provider

            value={{
                questions,
                setQuestions,
                currentQuestion,
                setCurrentQuestion,
                currentQuestionIndex,
                setCurrentQuestionIndex,
                currentCorrectlyAnswered,
                genereateQuestions,
                updateQuestion,
                updateCorrectlyAnswered,
            }}
        >
            {children}
        </QuestionContext.Provider>
    )
}



export const useQuestionContext = () => useContext(QuestionContext);

export default QuestionContext;