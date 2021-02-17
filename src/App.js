import CardContainer from './CardContainer';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Header from './Header';
import Footer from './Footer';

import './App.css';

function App({ word, imageUrl, meaning, color }) {
  return (
    <div className="container">
      <Header />

      <CardContainer color={color}>
        <CardFront
          word={word}
          imageUrl={imageUrl} 
        />
      </CardContainer>
      
      <CardContainer color={color}>
        <CardBack word={word} meaning={meaning} />
      </CardContainer>

      <Footer />

  </div>
  );
}

export default App;
