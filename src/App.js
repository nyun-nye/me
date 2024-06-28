import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Start from './components/Start';
import Question from './components/Question';
import Result from './components/Result';

function App() {

  const [num, setNum] = useState(1); // 질문 번호

  const [score, setScore] =useState({
    EI:0,
    SN:0,
    TF:0,
    PJ: 0,
  })

  const updateScore = (type, value) => { // 점수 업데이트하는 함수
    setScore({
      ...score,
      [type]:score[type]+value,
    });
  }

  const resetState =() =>{ // 다시하기 눌렀을 때 초기화하는 함수
    setNum(1);
    setScore({
      EI:0,
      SN:0,
      TF:0,
      PJ:0,
    })
  }

  return (
    <Routes>
      <Route path="/" element={<Start setNum={setNum}/>}/>
      <Route 
      path="/question" 
      element={<Question num={num} updateScore={updateScore} setNum={setNum}/>}/>
      <Route 
      path="/result" 
      element={<Result score={score} resetState={resetState}/>}/>
    </Routes>
  );
}

export default App;