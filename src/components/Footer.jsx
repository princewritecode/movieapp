import { Link } from "react-router";

const Footer = () =>
{
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-bold">Movietux</h2>
                    <p className="mt-2 text-gray-400">Your go-to platform for movie information.</p>
                </div>
                <nav className="mt-4 md:mt-0">
                    <ul className="flex space-x-4">
                        <li><Link to={'/'} className="hover:text-gray-400 transition">Home</Link></li>
                        <li><Link to={'/about'} className="hover:text-gray-400 transition">About</Link></li>
                        <li><Link to={'/contact'} className="hover:text-gray-400 transition">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Movietux. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
