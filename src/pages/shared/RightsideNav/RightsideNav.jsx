import { AiOutlineGoogle,AiFillGithub } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qpic1 from '../../../assets/qZone1.png';
import qpic2 from '../../../assets/qZone2.png';
import qpic3 from '../../../assets/qZone3.png';

const RightsideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-2 mb-4'>
                <h2 className='text-xl font-medium'>Login With</h2>
                <button className="btn btn-outline w-full p-2">
                    <AiOutlineGoogle></AiOutlineGoogle>
                    Button
                </button>
                <button className="btn btn-outline w-full p-2">
                    <AiFillGithub></AiFillGithub>
                    GitHub
                </button>
            </div>
            <div className='p-4 mb-4'>
                <h2 className='text-xl font-medium mb-2'>Find Us On</h2>
                <a href='' className='flex items-center p-4 border rounded-t-lg'>
                   <FaFacebook></FaFacebook>
                <span className='ml-3'>facebook</span>

                </a>
                <a href='' className='flex items-center p-4 border-x '>
                   <FaTwitter></FaTwitter>
                <span className='ml-3'>Twitter</span>

                </a>
                <a href='' className='flex items-center p-4 border rounded-b-lg'>
                   <FaInstagram></FaInstagram>
                <span className='ml-3'>Instragram</span>

                </a>
            </div>
            <div className='p-4 space-y-2 mb-4'>
                <h2 className='text-xl font-medium'>Q Zone</h2>
                <div>
                    <img src={qpic1}></img>
                    <img src={qpic2}></img>
                    <img src={qpic3}></img>
                </div>
                
            </div>
        </div>
    );
};

export default RightsideNav;