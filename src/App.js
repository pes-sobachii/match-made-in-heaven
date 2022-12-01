import './App.css';
import Input from './Components/Input';
import { useSelector } from 'react-redux'
import { Card } from './Components/Card';

function App() {

  const data = useSelector((state) => state.teacher.userName)

  return (
    <div className="wrapper">
      <header className="header">
          <div className='container'>
            <h1>Match Made In Heaven</h1>
          </div>
      </header>
      <main className="main">
        <div className='container'>
          { !data ? <Input /> : <Card/> }
        </div>
      </main>
    </div>
  );
}

export default App;
