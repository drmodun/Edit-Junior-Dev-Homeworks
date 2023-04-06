import { useEffect, useState } from "react";
import { useQuestionContext } from "../../providers/QuestionProvider";
import classes from "./Question.module.css";
export const Question = () => {


    const { questions, currentQuestion, currentQuestionIndex, updateCorrectlyAnswered, updateCanMove, generateQuestions, isActive} = useQuestionContext();
    const question = questions[currentQuestionIndex];
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    useEffect(() => {
        setSelectedAnswer(null);
    }, [currentQuestionIndex]);

    const onAnswer = (answer, index) => {
        setSelectedAnswer(index);
        if (answer === currentQuestion.correct_answer) {
            updateCorrectlyAnswered();
        }
        updateCanMove(true);
    };

    return (
        <div className={classes.Question}>
            {question &&  isActive ? <>
            <div className={classes.QuestionText}>{question.question}</div>
            <div className={classes.Answers}>
                {question.allAnswers.map((answer, index) => (
                    <button
                        className={classes.Answer}
                        onClick={() => onAnswer(answer, index)}
                        key={index}
                        style={{backgroundColor : index === selectedAnswer ? answer === question.correct_answer ? "green" : "red" 
                        : selectedAnswer!==null ? answer === question.correct_answer ? "green" : "white" : ""}}

                        disabled={selectedAnswer !== null}
                    >
                        {answer}   
                    </button>
                ))}
            </div>
            </>
                : null}
        </div>
    );
}