import './App.css';
import Avatar from './components/Avatar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'

function App() {
  return (
    <>
    <header className='header'>
      <Avatar />
      <Hero />
    </header>
    <nav className="sidenav">
      <About />
    </nav>
    <main className="main-info">
      hihi
    </main>
    
    </>
  );
}

export default App;
