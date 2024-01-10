import Category from '../Category/Category'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/Herosection';
import './app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Category />
      </main>
    </div>
  );
}

export default App;
