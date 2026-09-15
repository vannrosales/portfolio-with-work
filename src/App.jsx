import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <Navbar />
      <div className="min-h-screen relative z-10 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Content />
      </div>
    </>
  );
}

export default App;
