import React from 'react';

const About = () => {
  const query = new URLSearchParams(window.location.search);

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {<p>detail 값을 {query.get('detail')} 로 설정하셨군요!</p>}
    </div>
  );
};

export default About;
