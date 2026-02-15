import * as React from 'react';
import { Header } from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import './Animations.css';
import { RecentPage } from './pages/RecentPage';
import { VitaPage } from './pages/VitaPage';
import { PublicationPage } from './pages/PublicationPage';
import { WorksPage } from './pages/WorksPage';
import { NewsPage } from './pages/NewsPage';
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
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<RecentPage />} />
      </Routes>

      <p className={"copyright"} >© Andrea Gotti {new Date().getFullYear()} | <Link to={"/contact"}>Contact</Link></p>
    </div>
  );
}
