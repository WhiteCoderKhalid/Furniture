import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Bedroom from './pages/Bedroom';
import LivingRoom from './pages/LivingRoom';
import DiningRoom from './pages/DiningRoom';
import HomeOffice from './pages/HomeOffice';
import Outdoor from './pages/Outdoor';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#E8E3DD]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bedroom" element={<Bedroom />} />
            <Route path="/living-room" element={<LivingRoom />} />
            <Route path="/dining-room" element={<DiningRoom />} />
            <Route path="/office" element={<HomeOffice />} />
            <Route path="/outdoor" element={<Outdoor />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;