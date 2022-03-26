import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "새해 해돋이 명소 추천"]);
  let [하트, 하트변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let posts = "강남 고기 맛집";

  function 반복된ui() {
    var 어레이 = [];
    for (var i = 0; i < 3; i++) {
      어레이.push(<div>안녕</div>);
    }

    return 어레이;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {반복된ui()}

      {글제목.map(function (글) {
        return (
          <div className="list">
            <h4>
              {글}
              <span
                onClick={() => {
                  하트변경(하트 + 1);
                }}
              >
                ❤️
              </span>
              {하트}
            </h4>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}

      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// function BtnWriteCancel(props) {
//   return (
//     <div>
//       <button onClick={()=>{props.modal변경(true)}}>글작성</button>
//       <button onClick={()=>{props.modal변경(false)}}>취소</button>
//     </div>
//   );
// }

export default App;
