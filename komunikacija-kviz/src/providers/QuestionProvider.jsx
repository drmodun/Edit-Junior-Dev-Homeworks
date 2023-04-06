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
    categoryDictionary: [],
    setCategoryDictionary: () => { },
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
    const [categoryDictionary, setCategoryDictionary] = useState(defaultContext.categoryDictionary);


    const setGameSettings = (amount, category, difficulty) => {
        setAmount(amount);
        setCategory(category);
        setDifficulty(difficulty);
        console.log(amount, category, difficulty);
        genereateQuestions(amount, category, difficulty);
    };

    const toggleIsActive = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await fetch("https://opentdb.com/api_category.php");
                const data = await response.json();
                console.log(data);
                const categoryDictionary = data.trivia_categories.reduce((acc, category) => {
                    acc[category.id] = category.name;
                    return acc;
                }, {});
                setCategoryDictionary(categoryDictionary);
                console.log(categoryDictionary);

            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
    }, []);

    const genereateQuestions = async (amount, categoy, difficulty) => {
        try {
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
                categoryDictionary,
            }}
        >
            {children}
        </QuestionContext.Provider>
    )
}



export const useQuestionContext = () => useContext(QuestionContext);

export default QuestionContext;