import CardContainer from './CardContainer';
import CardFront from './CardFront';
import CardBack from './CardBack';

import './App.css';

function App({ word, imageUrl, meaning }) {
  return (
    <div className="container">
      <CardContainer>
        <CardFront
          word={word}
          imageUrl={imageUrl} 
        />
      </CardContainer>
      
      <CardContainer>
        <CardBack word={word} meaning={meaning} />
      </CardContainer>

  </div>
  );
}

export default App;
