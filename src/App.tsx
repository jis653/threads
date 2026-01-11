import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from '@/pages/Home';
import Marketplace from '@/pages/Marketplace';
import ProductDetails from '@/pages/ProductDetails';
import Customization from '@/pages/Customization';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/customization" element={<Customization />} />
          </Routes>
        </main>
        <footer className="bg-foreground text-background py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">© 2024 ReStyle Marketplace. Sustainable Fashion for the Future.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;