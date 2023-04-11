const connectButton = document.getElementById('connectButton');


connectButton.addEventListener('click', async () => {
 
  if (window.ethereum) {
    try {
      
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Connected to Metamask');
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error('Metamask not installed');
  }
});
