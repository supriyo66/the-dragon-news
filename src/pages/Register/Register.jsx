import { useContext } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const{createUser}=useContext(AuthContext);
    const location=useLocation()
    const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form=new FormData(e.currentTarget)
        const name=form.get('name')
        const photo=form.get('photo')
        const email=form.get('email')
        const password=form.get('password')
        console.log(name,photo,email,password)

        createUser(email,password)
        .then(res=>{console.log(res.user)
          navigate(location?.state? location.state : '/')})
        .catch(error=>{console.log(error)})
    }
    return (
        <div>
            <Navbar></Navbar>
           <div className="md:w-3/4 lg:2/4 mx-auto mt-10">
                <h2 className="text-center text-2xl font-medium">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="photo" name="photo" placeholder="Photo url" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
            </div> 
            <p className="mx-auto text-center">Already have an acoount? <Link  to='/login' ><span className='text-blue-500'> Click Here</span></Link></p>
        </div>
    );
};

export default Register;