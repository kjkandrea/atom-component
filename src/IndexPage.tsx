import './App.css';
import Button from './components/atom/Button';
import {NavLink} from 'react-router-dom';

function IndexPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button type="button" disabled onClick={() => alert('clicked!')}>
        얼럿 표출
      </Button>
      <Button as="a" href="https://google.com" target="_blank">
        google 로 이동
      </Button>
      <Button as={NavLink} to="/">
        홈으로 이동
      </Button>
    </div>
  );
}

export default IndexPage;
