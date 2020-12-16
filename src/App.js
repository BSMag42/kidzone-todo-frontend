
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ActivitySection from './components/ActivitySection/ActivitySection'



function App() {
  return (
    <div className="App">
       <header className="">
       <nav className="navbar ">
           <h1 className="logo">Kids Zone</h1>
           <ul className="desktop-list ">
            <App/>Home
            <li><a href="allActivityCategory.html" >Activities</a></li>
               <li><a href="#" >About</a></li>
               <li><a href="#" >Login/Register</a></li>
           </ul>
           <ul className="mobile-list ">
            <li><FontAwesomeIcon icon={faHome}/></li>
        </ul>
       </nav>
        
    </header> 
    <main>
        <div>
            <section className="image_section">
                <img src="https://media.istockphoto.com/photos/portrait-of-excited-elementary-school-pupils-on-playing-field-at-picture-id1160932512?k=6&m=1160932512&s=612x612&w=0&h=Z4xOpj4us4TV41p1DQVPQjZkmrYSkYgU0dXzDDuwS8k=" class="AppImage" alt="alternatetext"/>
                <div className="image_section--top-right">8-15Yrs</div>
            </section>
        </div>
        <div>
           
            <section className="description_section">
                <p>Your children can learn something new today in a safe online environment. These educational and engaging websites for kids are fun while offering online learning games, printables, videos, and more.</p>
            </section>
        </div>
        <h2>Explore Activities</h2>
        <p>Look at some of our available activity categories</p>
        <div className="activity_section "> 
            <ActivitySection category="online" type="activity"/>
            <ActivitySection category="premise" type="activity"/>
        </div>
        <h2>Explore Mentoring</h2>
        <p>Look at some of our Mentoring categories</p>
        <div className="mentoring_section">
            <ActivitySection category="online" type="mentoring"/>
            <ActivitySection category="premise" type="mentoring"/>
        </div>
    </main>
    </div>
  );
}

export default App;
