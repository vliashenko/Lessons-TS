
import { Link } from "react-router-dom";
export function Navigation() {
    return (
        <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
            <h3 className="font-bold">GitHub Search</h3>

            <span>
                <Link className='m-2' to={"/"}>Home</Link>
                <Link to={"/favorites"}>Favorites</Link>
            </span>
        </nav>
    );
};

export default Navigation;