let meme = document.createElement('p');
let imagem = document.createElement('img');

memesList = ['auge', 'sofro kk', 'hm ok bjs', 'hahahahahaha'];
memesImagesList = [
	'https://i.pinimg.com/236x/40/36/59/403659fa9ac1c278d2227f921dfcb0c5.jpg',
	'https://pbs.twimg.com/media/DdgpGBoU0AAX1Vy.jpg',
	'https://pbs.twimg.com/media/D7SbuS1W4AAKTNL.jpg',
	'https://i.pinimg.com/236x/63/a0/01/63a001466ea0fefc5c7bd34d85af3bee.jpg',
	'https://i.pinimg.com/236x/29/a2/a8/29a2a81356162386e52ae98127a6db6d.jpg',
	'https://i.pinimg.com/236x/59/70/13/597013c08e53315c5c0488600dc74c62.jpg',
];

function sortear() {
	meme.innerHTML = memesList[Math.floor(getRandomArbitrary(0, memesList.length))];
	imagemItem = memesImagesList[Math.floor(getRandomArbitrary(0, memesImagesList.length))];
	document.body.appendChild(meme);
	imagem.setAttribute("src", imagemItem);
	document.body.appendChild(imagem);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
