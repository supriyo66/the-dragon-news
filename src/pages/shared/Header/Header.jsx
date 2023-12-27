import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center mx-auto'>
            <img className='mx-auto' src={logo}></img>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;