// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import * as types from './action-types';
import { LOAD_QUIZ, LOADING, LOAD_ANSWER1, LOAD_ANSWER2, SELECTED, SET_MESSAGE, SET_FORM, RESET_FORM, MOVE_CLOCKWISE, MOVE_COUNTER, SELECTED2 } from "./action-creators";


const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      return state === 5 ? state - 5 : state + 1 
    
    case MOVE_COUNTER:
      return state === 0 ? state + 5 : state - 1;
  default:
    return state;
}
}

const initialQuizState = [];
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case LOAD_QUIZ:
      return action.payload

    default: 
    return state;
  }
  
}

const initLoadingState = null;

const loadingReducer = (state = initLoadingState, action) => {
  switch(action.type){
    case LOADING:
      return !state
    default:
      return state;
  }
}


const initAnswerData = [];

const answerReducer = (state = initAnswerData, action) => {
  switch(action.type){
    case LOAD_ANSWER1:
      return action.payload
    
    default:
      return state;
  }
}
const initAnswerData2 = [];

const answerReducer2 = (state = initAnswerData2, action) => {
  switch(action.type){
  
    case LOAD_ANSWER2:
      return action.payload
    default:
      return state;
  }
}

const initialSelectedAnswerState = "f"
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SELECTED:
      return !state
    default:
      return state;
  }
  
}

const initialSelectedAnswerState2 = false

function selectedAnswer2(state = initialSelectedAnswerState2, action) {
  switch(action.type){
    case SELECTED2:
      return state === true ? true : true
    default:
      return state
  }
}

const initialMessageState = ''
function setMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_MESSAGE:
      return action.payload
  }
  return state
   
  
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case SET_FORM:
      return action.payload
    case RESET_FORM:
      return action.payload
  }
  return state
}
export default combineReducers({ wheel, quiz, selectedAnswer, selectedAnswer2, setMessage, form, loadingReducer, answerReducer, answerReducer2 });