import { Link } from "react-router-dom";
// import SignupForm from './SignupForm'
function Home({currentUser}) {
    return (
        <div className="home">
            {currentUser ? console.log(currentUser) :
             <div className="homeBar">
    <Link to="./signUp"> <span className="HBSU">Sign up</span></Link> <Link to="./login"> <span className="HBSU">Log In</span> </Link>
    </div>}
            <header className="header">An open space for research, exploration, education and discourse.</header>
  <br />
  <div ><header className="news">News</header><p className="newstext"> 1/22/22: Search, post and discussion features are all up and working! Twitter sharing, and image hosting on the way!</p></div>
        </div>
    )
}

export default Home