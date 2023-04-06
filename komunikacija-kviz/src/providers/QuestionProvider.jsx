import { useEffect, useState } from "react";
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
    canMove: false,
    setCanMove: () => { },
    amount: 0,
    setAmount: () => { },
    category: "",
    setCategory: () => { },
    difficulty: "",
    setDifficulty: () => { },
    isActive: false,
    setIsActive: () => { },
};


const QuestionContext = createContext(defaultContext);

export const QuestionProvider = ({ children }) => {
    const [questions, setQuestions] = useState(defaultContext.questions);
    const [currentQuestion, setCurrentQuestion] = useState(defaultContext.currentQuestion);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(defaultContext.currentQuestionIndex);
    const [currentCorrectlyAnswered, setCurrentCorrectlyAnswered] = useState(defaultContext.currentCorrectlyAnswered);
    const [canMove, setCanMove] = useState(defaultContext.canMove);
    const [amount, setAmount] = useState(defaultContext.amount);
    const [category, setCategory] = useState(defaultContext.category);
    const [difficulty, setDifficulty] = useState(defaultContext.difficulty);
    const [isActive, setIsActive] = useState(defaultContext.isActive);



    const setGameSettings = (amount, category, difficulty) => {
        setAmount(amount);
        setCategory(category);
        setDifficulty(difficulty);
        genereateQuestions();
    };

    const toggleIsActive = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setAmount(9);
        setCategory(9);
        setDifficulty("easy");
        genereateQuestions();
    }, []);

    const genereateQuestions = async () => {
        try {
            console.log(amount, category, difficulty);
            const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
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
            console.log(questions);
            console.log(data);
            setQuestions(questions);
            setCurrentQuestion(questions[0]);
            setCurrentQuestionIndex(0);
            setCurrentCorrectlyAnswered(0);
            setCanMove(false);
        } catch (error) {
            console.log(error);
        }
    };

    const updateQuestion = () => {
        const nextQuestion = questions[currentQuestionIndex + 1];
        if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCanMove(false);
        }
        else {
            alert("You have completed the quiz with " + currentCorrectlyAnswered + " correct answers");
            toggleIsActive();
        }
    };

    const updateCorrectlyAnswered = () => {
        setCurrentCorrectlyAnswered(currentCorrectlyAnswered + 1);
    };

    const updateCanMove = (bool) => {
        setCanMove(bool);
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
                updateCanMove,
                setGameSettings,
                canMove,
                category,
                difficulty,
                amount,
                isActive,
                toggleIsActive,
            }}
        >
            {children}
        </QuestionContext.Provider>
    )
}



export const useQuestionContext = () => useContext(QuestionContext);

export default QuestionContext;