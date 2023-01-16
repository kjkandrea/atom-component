import './App.css';
import Button from './components/atom/Button';

function App() {
  return (
    <>
      <Button type="button" disabled onClick={() => alert('clicked!')}>
        얼럿 표출
      </Button>
      <Button as="a" href="https://google.com" target="_blank">
        google 로 이동
      </Button>
    </>
  );
}

export default App;
