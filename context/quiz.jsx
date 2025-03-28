import { createContext, useReducer } from "react";

import questions from '../data/questions_complete'

const STAGES = ["Start", "Category", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionToHide: null 
}
const quizReducer = (state, action) => {
    // console.log(state, action);

    switch (action.type) {
        case "CHANGE_STATE":
            // Alterar o estado do jogo
            return {
                ...state,
                gameStage: STAGES[1], // Avança para o próximo estágio
            };

        case "START_GAME": 
            // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
            let quizQuestions = null

            // biome-ignore lint/complexity/noForEach: <explanation>
            state.questions.forEach((question) => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions
                }
            })

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            }


        case "REORDER_QUESTIONS": {
            // Verificar se as perguntas existem no estado
            const reorderedQuestions = state.questions.sort(() => Math.random() - 0.5); // Embaralhar
            return {
                ...state,
                questions: reorderedQuestions, // Atualizar o estado com as perguntas embaralhadas
            };
        }

        case "CHANGE_QUESTION": {
            const nexQuestion = state.currentQuestion + 1
            let endGame = false

            if (!state.questions[nexQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuestion: nexQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help: false,
            }

        }

        case "NEW_GAME":
            return initialState

        case "CHECK_ANSWER":
            if (state.answerSelected) return state

            // adicionar a resposta a uma váriavel
            // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
            const answer = action.payload.answer
            // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
            const option = action.payload.option
            // biome-ignore lint/correctness/noSwitchDeclarations: <explanation>
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }

        case "SHOW_TIP":
            return {
                ...state,
                help: "tip",
            }

        case "REMOVE_OPTION": { 
            const questionWithoutOption = state.questions[state.currentQuestion]

            let repeat = true
            let optionToHide

            // biome-ignore lint/complexity/noForEach: <explanation>
            questionWithoutOption.options.forEach((option) => {
              if(option !== questionWithoutOption.answer && repeat) {
                optionToHide = option
                repeat = false
              }  
            })

            return {
                ...state,
                optionToHide,
                help: true,
            }
        }
        

        default:
            return state; // Retorna o estado atual para ações desconhecidas
    }
};




export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}