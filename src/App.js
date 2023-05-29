import './App.css';
import Analytics from './components/Analytics';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar/Navbar';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div className="app bg-black">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetter/>
      <Card/>
    </div>
  );
}

export default App;
