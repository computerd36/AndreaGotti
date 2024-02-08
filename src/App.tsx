import * as React from 'react';
import { Header } from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import './Animations.css';
import { RecentPage } from './pages/RecentPage';
import { ImpressPage } from './pages/ImpressPage';
import { VitaPage } from './pages/VitaPage';
import { PublicationPage } from './pages/PublicationPage';
import { WorksPage } from './pages/WorksPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div id='gottiMain'>
      <Header isOpen={isOpen} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<RecentPage />} />
        <Route path="/vita" element={<VitaPage />} />
        <Route path="/publications" element={<PublicationPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/impress" element={<ImpressPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <p className={"copyright"} >© Andrea Gotti 2024 | <Link to={"/contact"}>Impress</Link></p>
    </div>
  );
}
