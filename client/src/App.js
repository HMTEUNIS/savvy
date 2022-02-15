import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Read from './Read'
import Discuss from './Discuss'
import Navbar from './Navbar'
import About from './About'
import Home from './Home'
import NewThread from './NewThread'
import {useState, useEffect, useRef} from 'react'
import Particles from "react-tsparticles";
import Thread from './Thread'
import VeiwExisting from './VeiwExisting'
import PFwidget from './PFwidget';
import SignupForm from './SignupForm';
import Login from './Login'
import UserCard from './UserCard';
function App() {
  const [poster, setPoster] = useState(null)
  const [selArt, setselArt] = useState("")
  const [thread, setThread] = useState([])
  const [re, setRe] = useState(false)
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [data, setData] = useState ([])

 // auth
 console.log("is auth", isAuthenticated)

 useEffect(() => {
  fetch("/me", {
    credentials: "include",
  }).then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        setCurrentUser(user);
        setAuthenticated(true);
      });
    } else {
      setAuthenticated(true);
    }
  });
}, []);

if (!isAuthenticated) {
  return <div></div>;
}
// move profile veiw
const clearPoster = () => {
  setPoster(null)
}


//particles
const particlesInit = (main) => {
  console.log("a");

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
};

const particlesLoaded = (container) => {
  console.log("A");
};

//
let threadARt = 1



console.log("cu", currentUser)
  const clickspan1 = () => {
    window.location.href="/"
  }
  const clickcore = () => {
    window.open("https://core.ac.uk/")
  }
  return (
    
    <div className="App" >
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#",
          },
        },
        fpsLimit: 80,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 1,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: "#",
          },
          links: {
            color: "#1dd7367e",
            distance: 250,
            enable: true,
            opacity: 0.3,
            width: 2,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 200,
            },
            value: 8,
          },
          opacity: {
            value: 3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
          },
        },
        detectRetina: false,
      }}
    />
    {currentUser ? <PFwidget isAuthenticated={isAuthenticated} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
 : console.log("noone is home")}
     <span onClick={clickspan1}  className="logo">savvy</span>
  



      <Navbar />
     
      <span className="power">powered by</span>
     <br />
    
      <img className="core" onClick={clickcore} src="https://blog.core.ac.uk/wp-content/themes/twentyfifteen-child/images/core_logo.png" />
      
      <div className="main">

        
            

            <Routes>
      <Route path='/' element={<Home setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>}/>
      <Route path='/read' element={<Read setter={setselArt} data={data} setData={setData} setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>} />
      <Route path='/discuss' element={<Discuss re={re} setThread={setThread} setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>} />
      <Route path='/about' element={<About />} />
      <Route path='/newthread' element={<NewThread art={selArt} setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>} />
      <Route path='/thread' element={<Thread setRe={setRe} poster={poster} setPoster={setPoster} re={re} thread={thread} setCurrentUser={setCurrentUser}
            currentUser={currentUser}/>} />
      <Route path='/veiwexisting' element={<VeiwExisting setThread={setThread} art={selArt}/>} />
      <Route path='/signUp' element={<SignupForm setCurrentUser={setCurrentUser} />} />
      <Route path='/login' element={<Login />} />
      </Routes>
        </div>
        
       </div> 
  );
}

export default App;
