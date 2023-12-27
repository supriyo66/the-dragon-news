import { Link,  useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {signIn}=useContext(AuthContext)
    const location=useLocation();
    const navigate=useNavigate();
    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
       
        
        signIn(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : '/')
        })
        .catch(error=>{console.error(error)})
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-3/4 lg:2/4 mx-auto mt-10">
                <h2 className="text-center text-2xl font-medium">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
            </div>
            <p className="mx-auto text-center">Do not have an acoount? <Link to='/register' ><span className='text-blue-500'> Click Here</span></Link></p>
        </div>
        
    );
};

export default Login;