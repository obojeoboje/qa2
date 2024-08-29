import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Faq from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Format from './components/Format/Format';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import Reviews from './components/Reviews/Reviews';
import Tarifs from './components/Tarifs/Tarifs';
import WhosGoodFor from './components/WhosGoodFor/WhosGoodFor';
import WhyTrustMe from './components/WhyTrustMe/WhyTrustMe';
import Offer from './components/Offer/Offer';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <WhyTrustMe />
            <Results />
            <Format />
            <WhosGoodFor />
            <Tarifs />
            <Reviews />
            <Faq />
            <Footer />
          </>
        } />
        <Route path="/offer" element={<Offer />} />
      </Routes>
    </div>
  );
}

export default App;
