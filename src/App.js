import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["5x5 루틴", "8x8 루틴", "초보자 루틴"]);
  let [발행일, 발행일변경] = useState(['2021.03.24','2021.03.25','2021.03.26'])
  let [상세내용, 상세내용변경] = useState(['운동내용1','운동내용2','운동내용3'])
  let [현재하트, 하트변경] = useState(0);
  let [modal상태, modal상태변경] = useState(false)
  let [제목클릭, 제목클릭변경] = useState(0)
  let [입력값, 입력값변경] = useState('')

  return (
    <div className="App">
      <h2 className="black-nav">개발 Blog</h2>
      {글제목.map(function (글, i) {
        return (
          <div className="list" key={i}>
            <h3 onClick={()=>{제목클릭변경(i)}}>{글}<span onClick={() => {하트변경(현재하트 + 1);}}>❤️</span>{현재하트}</h3>
            <p>발행일: {발행일[i]}</p>
            <p style={{display:"none"}}>{상세내용[i]}</p>
            <hr />
          </div>
        );
      })}
      
      <div className="publish">
        <input onChange={(e)=>{입력값변경(e.target.value)}}/>
        <button onClick={()=>{
          let 새글 = [...글제목]
          새글.unshift(입력값);
          글제목변경(새글)}}>저장</button>
      </div>

      <button onClick={()=>{modal상태변경(!modal상태)}}>글보기</button>
      {modal상태 === true ? <Modal 글제목={글제목} 제목클릭={제목클릭} 발행일={발행일} 상세내용={상세내용}></Modal> : null}
    </div>
  );
  function Modal(props) {
    return (
      <div className="modal">
        <h2>{props.글제목[props.제목클릭]}</h2>
        <p>{props.발행일[props.제목클릭]}</p>
        <p>{props.상세내용[props.제목클릭]}</p>
      </div>
    )
  }
}

export default App;
