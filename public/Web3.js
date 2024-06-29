window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('Ethereum detected');
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);

        // Fetch the ABI from NameFunc.json
        const response = await fetch('../build/contracts/NameFunc.json');
        const contractData = await response.json();
        const contractABI = contractData.abi;
        const contractAddress = '0x419B9cFcc9a3859441937c4b0596d88d752F6ce9';

        const nameContract = new web3.eth.Contract(contractABI, contractAddress);

        // Set Name
        document.getElementById('nameForm').addEventListener('submit', async (event) => {
            event.preventDefault();
            const newName = document.getElementById('newName').value;
            const accounts = await web3.eth.getAccounts();

            try {
                await nameContract.methods.setName(newName).send({ from: accounts[0] });
                console.log('Name set successfully');
                alert('Name set successfully');
                // Clear the input field after setting the name
                document.getElementById('newName').value = '';
            } catch (error) {
                console.error('Error setting name:', error);
            }
        });

        document.getElementById('getNameButton').addEventListener('click', async () => {
            const inputName = document.getElementById('newName').value;
            if (inputName) {
                document.getElementById('nameDisplay').innerText = `Hello World, ${inputName}`;
            } else {
                alert('Please enter a name in the textbox.');
            }
        });
    } else {
        console.log('No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.');
    }
});
