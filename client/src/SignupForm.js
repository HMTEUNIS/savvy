import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm({ setCurrentUser }) {
    const [err, seterr] = useState("")
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    img_url: "",
    user_bio: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/signup", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        }).then(  
            window.location.href="/")
      } else {
        resp.json().then((errors) => {
          console.error(errors);
          seterr(errors)
        });
      }
    });
  };
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <label htmlFor="img_url">Image URL </label>
          <input
            type="img_url"
            name="img_url"
            value={formData.img_url}
            onChange={(e) => handleChange(e)}
          />
        
        <p>
          <label htmlFor="username">Bio </label>
          <br />
          <textarea
            type="text"
            name="user_bio"
            value={formData.user_bio}
            onChange={(e) => handleChange(e)}
            className="user_bio"
          />
        </p>
        <p className="errs">{err}</p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
        
        <p>Have an account?</p>
        <p>
          <Link to="/">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;