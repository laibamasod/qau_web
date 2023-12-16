import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import ProfileCard from './Components/profilecard';
import ViceCard from './Components/vicecard';
function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileCard/>
      <ViceCard/>
      <Footer/>
    </div>
  );
}

export default App;
