import'./style/index.css';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  let [isVisible, setVisibility] = useState(false);
  let primaryState = true;

  const hideDialog = () => {
    setVisibility(false);
  };

  const showDialog = () => {
    setVisibility(true);
  }

  return (
      <main>
        <div className="container">
        <StarRating/>
        <Dialog
        isVisible = {isVisible}
        isPrimary = {!primaryState}
        hideDialog = {hideDialog}
        />
        </div>
        <Button 
        isPrimary = {primaryState}
        showDialog = {showDialog}/>
      </main>
  );
}

export default App;
