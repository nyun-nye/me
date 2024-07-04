import qs1 from '../image/qs1.png';
import qs2 from '../image/qs2.png';
import qs3 from '../image/qs3.png';
import qs4 from '../image/qs4.png';
import qs5 from '../image/qs5.png';
import qs6 from '../image/qs6.png';
import qs7 from '../image/qs7.png';
import qs8 from '../image/qs8.png';
import qs9 from '../image/qs9.png';
import qs10 from '../image/qs10.png';
import qs11 from '../image/qs11.png';
import qs12 from '../image/qs12.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const questions = {
  1: {
    title: '집에 왔더니 아무도 없다면?',
    image: qs1,
    type: 'EI',
    A: '깜깜하고 너무 외롭다.',
    B: '드디어 나만의 시간! 행복하다.',
  },
  2: {
    title: '오랜만에 고등학교 동창회에 왔다!',
    image: qs2,
    type: 'EI',
    A: '오랜만에 만난 많은 친구들과 얘기한다.',
    B: '많이 친했던 친구들과 얘기한다.',
  },
  3: {
    title: '새로운 노래를 들었다!',
    image: qs3,
    type: 'SN',
    A: '멜로디에 집중한다.',
    B: '가사에 집중한다.',
  },
  4: {
    title: '집에 가는 약도를 그려보자!',
    image: qs4,
    type: 'SN',
    A: '짧고 간결하게! 큰 건물 위주로 그린다.',
    B: '상세하게! 어디에 있는지까지 그린다.',
  },
  5: {
    title: '늦어서 미안! 많이 기다렸어?',
    image: qs5,
    type: 'TF',
    A: '왜 늦은거야? (이유가 있으면 풀린다.)',
    B: '왜 늦은거야? (사과를 하면 풀린다.)',
  },
  6: {
    title: '누군가가 나를 싫어한다는 소리를 들었을 때 나의 반응은?',
    image: qs6,
    type: 'TF',
    A: '나를? 왜? (순수하게 이유가 궁금하다.)',
    B: '내가 뭐 잘못했나...?',
  },
  7: {
    title: '과제를 할 때!',
    image: qs7,
    type: 'PJ',
    A: '자료조사부터 해봐야 틀이 잡힌다.',
    B: '뭐부터 해야할지 계획을 짜야 틀이 잡힌다.',
  },
  8: {
    title: '너 지금 뭐해? 심심한데 우리 잠깐 보자!',
    image: qs8,
    type: 'PJ',
    A: '너무 좋지! 지금 나갈게~!',
    B: '엥? 갑자기? 왜?',
  },
  9: {
    title: '취미 생활을 즐길 때 나는?',
    image: qs9,
    type: 'EI',
    A: '많은 사람들과 함께할 수 있는 스포츠, 문화생활을 선호한다.',
    B: '나 혼자서 즐길 수 있는 보석십자수, 피포페인팅을 선호한다.',
  },
  10: {
    title: '영화를 보고 난 후 친구에게 설명을 할 때!',
    image: qs10,
    type: 'SN',
    A: '이 영화에서는 누가 죽고~ 누가 나오고~ ...',
    B: '이 영화 분위기가 진짜 낭만적이었어!',
  },
  11: {
    title: '친구가 "나 목이 너무 아파"라고 했을 때 내 대답은?',
    image: qs11,
    type: 'TF',
    A: '목 어디? 뼈?',
    B: '괜찮아? 많이 아파?',
  },
  12: {
    title: '내 휴대폰에는?',
    image: qs12,
    type: 'PJ',
    A: '읽지 않은 알람이 많다.',
    B: '읽지 않은 알람이 없다.',
  },
};

function Question({num, setNum, updateScore}) {

    const navigate = useNavigate();

    const handleAnswer = (type, value) =>{
        updateScore(type, value);

        if(num<12){
            setNum(num+1);
        }else {
            navigate('/result');
        }
    }

    const currentQuestion = questions[num];

    return(
        <div className="content" id="question">
            <p id="pgrNum">{num}/12</p>
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                style={{width: `calc(100/12*${num}%)`}}
                ></div>
            </div>
            <p id="title">{currentQuestion.title}</p>
            <div className="question-image-container">
                {currentQuestion.image &&(
                    <img src={currentQuestion.image} className="question-image" />
                )}
            </div>
            <button className="btn btn-primary" onClick={()=>handleAnswer(currentQuestion.type,1)}>
                {currentQuestion.A}
            </button>
            <button className="btn btn-primary mt-3" onClick={()=>handleAnswer(currentQuestion.type,0)}>
                {currentQuestion.B}
            </button>
        </div>
    )
}
export default Question;