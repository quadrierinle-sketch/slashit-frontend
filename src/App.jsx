import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
// Icons
import { Home as HomeIcon, Search, PlusCircle, CreditCard, User } from 'lucide-react';

// IMPORT YOUR REAL PAGES
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Home from './pages/dashboard/Home';
import CreateSlash from './pages/dashboard/CreateSlash';
import Wallet from './pages/dashboard/Wallet';
import Profile from './pages/dashboard/Profile'; // <--- NEW IMPORT

function BottomNav() {
  const location = useLocation();
  // Hide nav on login/signup pages
  if (['/signin', '/signup'].includes(location.pathname)) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center z-50">
      <Link to="/" className="text-gray-500 hover:text-primary transition">
        <HomeIcon size={24} />
      </Link>
      
      <Search size={24} className="text-gray-500 cursor-pointer hover:text-primary transition" />
      
      <div className="bg-primary text-white p-3 rounded-full -mt-8 shadow-lg cursor-pointer transform hover:scale-105 transition">
        <Link to="/create"><PlusCircle size={32} /></Link>
      </div>
      
      <Link to="/wallet" className="text-gray-500 hover:text-primary transition">
        <CreditCard size={24} />
      </Link>
      
      <Link to="/profile" className="text-gray-500 hover:text-primary transition">
        <User size={24} />
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-20 font-sans text-dark bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreateSlash />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} /> {/* <--- CONNECTED HERE */}
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;