
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

function App(screenName) {
  return (
    <div className="App">
      <Header/>
     <Body page='HomeScreen'/>
       {/* <Body page='ActivityDetailScreen'/>  */}
       {/* <Body page='kidsZoneScreen'/>  */}
      <Footer/>
    </div>
  );
}

export default App;
