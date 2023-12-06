import './App.css';
import Header from './Header';
import Products from './Products';

function App() {

  function dosomthing(data)
  {
    console.log("Hello i am clicked"+data)
  }

  return (
    <div className="App">
  
    <Header/>
    <Products/>
    <button className='btn'onClick={()=>dosomthing("Rajvansh")}>Click</button>
    </div>
  );
}

export default App;
