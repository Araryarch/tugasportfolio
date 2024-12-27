import Landing from './components/Landing';
import Navbar from './components/ui/Navbar';

const App = () => {
  return (
    <main className="w-full min-h-screen bg-background dark">
      <Navbar/>
      <Landing/>
    </main>
  )
}

export default App