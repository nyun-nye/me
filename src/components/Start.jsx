import React from 'react';
import { useNavigate } from 'react-router-dom';
import bannerImage from '../image/배너.png';

function Start() {
  const navigate = useNavigate();

  return (
    <div className="content" id="start">
      <p>인사이드아웃 캐릭터 테스트</p>
      <img src={bannerImage} alt="배너" className="img1" />
      <p id="maker">제작자: 윤예진</p>
      <p id="require">
        나의 인사이드 아웃 캐릭터 알아보기!
      </p>
      <button className="btn btn-primary" onClick={() => navigate('/question')}>
        라일리 머릿속으로~
      </button>
    </div>
  );
}

export default Start;
