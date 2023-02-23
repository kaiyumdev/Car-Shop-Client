import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "./../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleSingIn = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then((user) =>{
        const result = user.user;
        console.log(result);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }
  return (
    <form onSubmit={handleSingIn} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img className="py-6" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  w-1/2">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                New User? Please 
                  <Link to="/signup">
                    <button className="btn btn-outline btn-warning">
                      SignUp
                    </button>
                  </Link>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
