import Category from '../Category/Category'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/Herosection';
import PopUp from '../PopUp/PopUp';
import './app.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <Category />
        <PopUp />
      </main>
    </div>
  );
}

export default App;
