import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Search, PlusCircle, CreditCard, User } from 'lucide-react';

// Placeholder Components
const Signin = () => <div className="p-10 text-center"><h1>Sign In Page</h1></div>;
const Signup = () => <div className="p-10 text-center"><h1>Sign Up Page</h1></div>;
const Dashboard = () => <div className="p-5 text-center"><h1>Dashboard Home</h1></div>;
const CreateSlash = () => <div className="p-5 text-center"><h1>Create a Slash</h1></div>;
const Wallet = () => <div className="p-5 text-center"><h1>Wallet Page</h1></div>;

// Bottom Navigation Component
function BottomNav() {
  const location = useLocation();
  // Hide nav on login/signup pages
  if (['/signin', '/signup'].includes(location.pathname)) return null;

  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-3 px-6 flex justify-between items-center z-50">
      <Home size={24} className="text-gray-500 cursor-pointer" />
      <Search size={24} className="text-gray-500 cursor-pointer" />
      <div className="bg-primary text-white p-3 rounded-full -mt-8 shadow-lg cursor-pointer">
        <PlusCircle size={32} />
      </div>
      <CreditCard size={24} className="text-gray-500 cursor-pointer" />
      <User size={24} className="text-gray-500 cursor-pointer" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen pb-20 font-sans text-dark">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CreateSlash />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;