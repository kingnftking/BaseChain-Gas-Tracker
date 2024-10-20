const express = require('express');
const { ethers } = require('ethers');
const app = express();
const port = 3000;

const provider = new ethers.providers.JsonRpcProvider('https://rpc.base.org');

const gasTrackerABI = [
  "function getGasPrice() public view returns (uint256)"
];

const contractAddress = '0xYourContractAddressHere';

const gasTrackerContract = new ethers.Contract(contractAddress, gasTrackerABI, provider);

app.get('/api/gasprice', async (req, res) => {
  try {
    const gasPrice = await gasTrackerContract.getGasPrice();
    res.json({ gasPrice: ethers.utils.formatUnits(gasPrice, 'gwei') });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка получения цены газа' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
