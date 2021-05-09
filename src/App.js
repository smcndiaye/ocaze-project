import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { useStateValue } from './components/StatePrivider';
import Widget from './components/Widget';


function App() {
  const [{user},dispatch] = useStateValue() ;
  return (
    <div className="app">
      
      {!user ? (
           <Login />
        ) :
        
        (
          <>
          <Header />
      <div className="app__body">
        <Sidebar />
              <Feed />
              <Widget/>
            </div>
            </>
      )}
     
    </div>
  );
}

export default App;