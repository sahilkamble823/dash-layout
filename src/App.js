import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import HomeComponent from './components/HomeComponent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div class="nk-main ">
       <Sidebar/>
       <HomeComponent/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
