import Navbar from './components/Navbar';
import Content from './components/Content';
import Chatbot from './components/Chatbot';
import DevStationBadge from './components/DevStationBadge';

export default function App() {
  return (
    <div className="selection:bg-fg selection:text-bg min-h-screen">
      <Navbar />
      <Content />
      <DevStationBadge />
      <Chatbot />
    </div>
  );
}
