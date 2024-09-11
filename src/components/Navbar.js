import React, { useState, useEffect, useRef } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Navbar =  () => {
  const [openBox, setOpenBox] = useState(null);
  const boxRef = useRef(null);

  const handleClick = (box, event) => {
    event.stopPropagation(); // Prevents the click event from bubbling up to the document
    setOpenBox(box === openBox ? null : box);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpenBox(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openBox]);


// ******connect wallet****

const [account, setAccount] = useState(null);
const [errorMessage, setErrorMessage] = useState('');

const connectWallet = async () => {
  // Detect the Ethereum provider
  const provider = await detectEthereumProvider();

  if (provider) {
    // MetaMask is installed
    try {
      // Request account access if needed
      const accounts = await provider.request({ method: 'eth_requestAccounts' });

      // Set the user's account to state
      setAccount(accounts[0]);

      console.log('Connected account:', accounts[0]);

    } catch (err) {
      // User denied account access
      setErrorMessage('User denied account access');
      console.error('User denied account access');
    }
  } else {
    // MetaMask is not installed
    setErrorMessage('Please install MetaMask!');
    console.error('Please install MetaMask!');
  }
};
// ******connect wallet****



  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#" className="nav-link" onClick={(e) => handleClick('box1', e)}>Nex Balance</a>
          {/* <a href="#" className="nav-link" >Daily Claim</a> */}
          <Link to="/daily-claim" className="nav-link">Daily Claim</Link>
   
          <a href="#" className="nav-link" onClick={(e) => handleClick('box2', e)}>Rewards</a>
        </div>
        <div className="navbar-right">
          <a href="#" className="nav-link special" onClick={connectWallet}>Connect Wallet</a>
        </div>
      </nav>

      {openBox && (
        <div className="box" ref={boxRef}>
          {openBox === 'box1' && <p>Your Nex Balance: 1000 Nex</p>}
          {openBox === 'box2' && <p>Claim your daily reward!</p>}
        </div>
      )}
      
      
    </div>
  );

}

export default Navbar;