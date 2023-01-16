import '../App.css';
import Button from '../components/atom/Button';
import {NavLink} from 'react-router-dom';

function IndexPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Button as={NavLink} to="/getting-started">
        시작하려면 이 버튼을 누르세요.
      </Button>
      <Button type="button" onClick={() => alert('clicked!')}>
        얼럿 표출
      </Button>
      <Button as="a" href="https://google.com" target="_blank">
        google 로 이동
      </Button>
    </div>
  );
}

export default IndexPage;
