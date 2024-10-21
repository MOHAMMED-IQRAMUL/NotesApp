import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar px-10 flex min-h-[50px] bg-slate-600 text-white justify-between items-center">
            <div className="navbar-brand font-extrabold  text-xl">
                <NavLink to="/">NotesApp</NavLink>
            </div>
            <div className="navbar-links flex text-lg gap-3">

                <NavLink
                    onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                    onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                    className={({ isActive }) => isActive ? "text-gray-300" : "text-white"} to="/">Home</NavLink>

                <NavLink
                    onMouseEnter={(e) => e.target.style.color = '#d1d5db'} 
                    onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                    className={({ isActive }) => isActive ? "text-gray-300" : "text-white"} to="/Notes">Notes</NavLink>


            </div>
        </nav>
    );
};

export default Navbar;