import { Link } from "react-router";
const Header = () =>
{
    return (
        <header className="bg-gray-900 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-3xl font-bold">Welcome to Movie App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to={'/'} className="hover:text-gray-400 transition">Home</Link></li>
                        <li><Link className="hover:text-gray-400 transition">Movies</Link></li>
                        <li><Link to={'/about'} className="hover:text-gray-400 transition">About</Link></li>
                        <li><Link className="hover:text-gray-400 transition">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
