import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer footer-center p-10 bg-gray-100 text-[#12132D]-content">
            <div>
                <aside>
    
                    <p className="font-bold text-3xl my-5">Ninj-<span className="text-[#FDA403]">Cook</span></p> 
                    <p className="text-gray-600 font-semibold">Let&rsquo;s Connect: Follow us on social media for mouthwatering updates! </p>
                  </aside> 
                  <nav>
                    <div className="space-x-5 flex text-2xl mt-4">
                    <FaTwitter />
                    <FaFacebook />
                    <FaInstagramSquare />
                    </div>
                  </nav>
            </div>
            <p className=" border w-full border-gray-400"></p>
                <div className="text-center">
                    <p className="text-gray-500 ">2017, All Rights Reserved.</p>
                </div>
        </div>
    );
};

export default Footer;