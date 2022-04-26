import NavBar from './components/NavBar/NavBar'
import UserOverView from "./components/userOverView/UserOverView";
import "./App.css";

function App() {
  return (
    <div class="container">
      <header>
        <NavBar class='navbar'/>
        <UserOverView class='userOverView'/>
      </header>
      <div id='body'>
          <div></div>
          <div></div>
      </div>
    </div>
  );
}

export default App;
