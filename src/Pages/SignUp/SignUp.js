import React, { useContext } from 'react';
import AuthProvider from '../../Context/AuthProvider/AuthProvider';
import { AuthContext } from './../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    // console.log(createUser);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
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
        <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-1/2">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="SignUp" />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};

export default SignUp;