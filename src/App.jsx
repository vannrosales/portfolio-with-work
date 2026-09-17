import Navbar from './components/Navbar';
import Content from './components/Content';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen relative z-10 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
        <Content />
      </div>
      <Chatbot />
    </>
  );
}

export default App;
