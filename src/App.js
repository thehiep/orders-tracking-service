import logo from './logo.svg';
import classes from './App.css';
import Orders from './components/Orders/Orders'
import Header from './components/Layout/Header/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Orders />
      </main>
    </div>
  );
}

export default App;
