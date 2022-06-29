import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchQuiz,
  selectAnswer,
  postAnswer,
  selectAnswer2,
} from "../state/action-creators";

function Quiz(props) {
  console.log(props)
  const newObj = {
    quiz_id: props.thisQuiz.quiz_id,
    answer_id: props.thisAnswer1.answer_id,
  };
  const newObj1 = {
    quiz_id: props.thisQuiz.quiz_id,
    answer_id: props.thisAnswer2.answer_id,
  };
  const onSubmit = (e) => {
    e.preventDefault();

    props.postAnswer(showSelected());
    props.selectAnswer2();
  };

  useEffect(() => {
    if (props.thisQuiz == "") {
      props.fetchQuiz();
    } else {
      props.thisQuiz;
    }
  }, []);

  const onClick1 = () => {
    props.selectAnswer();
    props.selectAnswer2(true);
  };

  const onClick2 = () => {
    props.selectAnswer2(true);
  };

  const showSelected = () => {
    if (props.selected === false) {
      return newObj;
    } else {
      return newObj1;
    }
  };

  const onDisabled = () => {
    if (props.select === false) {
      return true;
    } else {
      false;
    }
  };
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !props.loading ? (
          <>
            <h1>{props.thisQuiz.question}</h1>
            {/* {props.selected ? <div id='quizAnswers'>
             <div className='answer selected'>{props.thisAnswer1} <button>
               SELECTED</button></div>
           </div> : <div className="answer">
               {props.thisAnswer2}
                <button>
                  Select
                </button>
              </div>} */}

            <div id="quizAnswers">
              {props.select ? (
                !props.selected ? (
                  <div className="answer selected">
                    {props.thisAnswer1.text}
                    <button onClick={onClick1}>SELECTED</button>
                  </div>
                ) : (
                  <div className="answer ">
                    {props.thisAnswer1.text}
                    <button onClick={onClick1}>Select</button>
                  </div>
                )
              ) : (
                <div className="answer ">
                  {props.thisAnswer1.text}
                  <button onClick={onClick1}>Select</button>
                </div>
              )}
              {props.select ? (
                !props.selected ? (
                  <div className="answer">
                    {props.thisAnswer2.text}
                    <button onClick={onClick1}>Select</button>
                  </div>
                ) : (
                  <div className="answer selected">
                    {props.thisAnswer2.text}
                    <button onClick={onClick2}>SELECTED</button>
                  </div>
                )
              ) : (
                <div className="answer">
                  {props.thisAnswer2.text}
                  <button onClick={onClick2}>Select</button>
                </div>
              )}

              {/* <div className="answer ">
               {props.thisAnswer2}
                <button >
                  Select
                </button> 
              </div> */}
            </div>

            <button
              onClick={onSubmit}
              disabled={onDisabled()}
              id="submitAnswerBtn"
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}
const mapStateToProps = (state) => {

  return {
   thisQuiz: state.quiz,
   loading: state.loadingReducer,
   thisAnswer1: state.answerReducer,
   thisAnswer2: state.answerReducer2,
   selected: state.selectedAnswer,
   select: state.selectedAnswer2
}
}


export default connect(mapStateToProps, {fetchQuiz, selectAnswer, selectAnswer2, postAnswer })(Quiz);
