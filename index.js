const Web3 = require('web3');

async function getOwner(contractAddress, tokenId, providerUrl) {
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
  const contract = new web3.eth.Contract([
    // ERC721 ABI
    {
      constant: true,
      inputs: [{ name: 'tokenId', type: 'uint256' }],
      name: 'ownerOf',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      type: 'function'
    }
  ], contractAddress);
  const owner = await contract.methods.ownerOf(tokenId).call();
  return owner;
}

module.exports = getOwner;
