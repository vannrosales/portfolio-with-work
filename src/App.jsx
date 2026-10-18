import Navbar from './components/Navbar';
import Content from './components/Content';
import DevStationBadge from './components/DevStationBadge';
import NotesLedgerModal from './components/NotesLedgerModal';

export default function App() {
  return (
    <div className="selection:bg-fg selection:text-bg min-h-screen">
      <Navbar />
      <Content />
      <DevStationBadge />
      <NotesLedgerModal />
    </div>
  );
}
