import './App.css';
import Avatar from './components/Avatar.js'
import Hero from './components/Hero.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Contacts from './components/Contacts.js'


function App() {
  return (
    <>
    <header className='header'>
      <Avatar />
      <Hero />
    </header>
    <nav className="sidenav">
      <About />
      <Skills />
      <Contacts />
    </nav>
    <main className="main-info">
      hihi
    </main>
    
    </>
  );
}

export default App;
