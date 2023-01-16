import '../App.css';
import Button from '../components/atom/Button';
import {NavLink} from 'react-router-dom';

function IndexPage() {
  return (
    <>
      <Button as={NavLink} to="/getting-started">
        시작하려면 이 버튼을 누르세요.
      </Button>
      <Button type="button" onClick={() => alert('clicked!')}>
        클릭이벤트
      </Button>
      <Button href="https://google.com" target="_blank" disabled>
        google 로 이동
      </Button>
    </>
  );
}

export default IndexPage;
