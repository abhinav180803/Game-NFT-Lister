/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
//function mintNFT () {

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
//function listNFTs () {

// print the total number of NFTs we have minted to the console
//function getTotalSupply() {

// call your functions below this line


// Step 1: Create an array variable to hold the NFTs
let nfts = [];

// Step 2: Create an object inside mintNFT function to hold the metadata
function mintNFT(_name, _developers,_description, _game) {
  let nft = {
    name: _name,
    developers: _developers,
    description: _description,
    game: _game
  };

  // Step 3: Store the NFT in the variable
  nfts.push(nft);
}

// Step 4: Function to list all NFTs' metadata
function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log("NFT " + (index + 1));
    console.log("Name: " + nft.name);
    console.log("Developers of NFTs:" + nft.developers)
    console.log("Description of NFT: " + nft.description);
    console.log("Game for which nft is made: " + nft.game);
    console.log("-----------------------------");
  });
}

// Step 5: Function to get the total supply of NFTs
function getTotalSupply() {
  return nfts.length;
}


//example
mintNFT("NFT1","Valve, Hidden Path Entertainment","5v5 FPS multiplayer","CS:GO");
mintNFT("NFT2","Rockstar Games","RPG game with the best story around","Red Dead Redemption2");
mintNFT("Nft3","Mojang Studios","Best selling video game of all time","Minecraft");
listNFTs();     //It will print all the metadata
console.log("Total NFTs: " + getTotalSupply()); // To get the total supply of NFTs
