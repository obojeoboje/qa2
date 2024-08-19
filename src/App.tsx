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

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
