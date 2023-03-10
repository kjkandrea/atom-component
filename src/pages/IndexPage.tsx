import '../App.css';
import Button from '../components/atom/Button';
import {NavLink} from 'react-router-dom';
import React from 'react';

function IndexPage() {
  return (
    <>
      <Button as={NavLink} ref={ref => ref?.focus()} to="/getting-started">
        시작하려면 이 버튼을 누르세요.
      </Button>
      <Button type="button" onClick={() => alert('clicked!')}>
        클릭이벤트
      </Button>
      <Button as="a" href="https://google.com" target="_blank">
        google 로 이동
      </Button>
      <Button as="div" role="button">
        나도 버튼 역할을 한다.
      </Button>
    </>
  );
}

export default IndexPage;
