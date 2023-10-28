import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then(result =>{
        console.log(result.user);
        const user ={
            email,
            lastLoggedAt: result.user?.metadata?.lastSignInTime
        }
        //update last logged at in the database
        fetch('https://coffee-store-server-9witg7lfw-md-monir-uddins-projects.vercel.app/users', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })

    })
    .catch(error =>{
        console.log(error);
    })
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In!</h1>
        </div>
        <div className="card shadow-2xl bg-base-100 w-96">
          <form onSubmit={handleSignIn} className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
