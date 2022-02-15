import { Link } from "react-router-dom";
import {useState} from 'react'
function Login({ setCurrentUser, currentUser }) {
    const [err, seterr] = useState(false)

  const [formData, setFormData] = useState({
    user_name: "",
    password_digest: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
console.log("form data", formData);
  const handleSubmit = (e) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    e.preventDefault();
    fetch("/login", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user);
        }).then( console.log(currentUser)).then(  
            window.location.href="/")
      } else {
        resp.json().then((errors) => {
          console.error(errors);
         
        }).then (seterr(!err));
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <p>
          <label htmlFor="user_name">Username </label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={(e) => handleChange(e)}
          />
        </p>
      
        <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </p>
        {err ? <p>no dice.</p> : console.log(err)}
        <p>
          <button type="submit">Log In</button>
        </p>
        <p>Don't have an account?</p>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;