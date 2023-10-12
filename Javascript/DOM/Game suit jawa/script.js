function getPilihanComp(){

	const comp = Math.random();
	if ( comp < 0.34 ) return 'gajah';
	if ( comp >= 0.34 && comp < 0.67) return 'orang';
	return 'semut';

}

function getHasil(comp, player) {
	
	if ( comp == player ) return 'Seri!';
	if ( player == 'gajah' ) return (comp == 'orang') ? 'Menang!' : 'Kalah!';
	if ( player == 'orang' ) return (comp == 'gajah') ? 'Kalah!' : 'Menang!';
	if ( player == 'semut' ) return (comp == 'gajah') ? 'Menang!' : 'Kalah!';

}

// const pGajah = document.querySelector('.gajah');
// const pOrang = document.querySelector('.orang');
// const pSemut = document.querySelector('.semut');

function putar(){
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah','orang','semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if ( new Date().getTime() - waktuMulai > 1000 ) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src','img/'+gambar[i++] +'.png');
		if ( i === gambar.length ) i = 0;
	},100);
}


// 1. cara menggunakan foreach

// ambil semua gambar yang ada pada li img
const pilihan = document.querySelectorAll('li img');

pilihan.forEach(function (pil) {
	
	// console.log(pil) -> menampilkan semua li img;
	pil.addEventListener('click',function(){

		const PilihanComputer = getPilihanComp();
		const PilihanPlayer = pil.className;
		const hasil = getHasil(PilihanComputer,PilihanPlayer);

		putar();

		setTimeout(function() {
			console.log('comp : '+ PilihanComputer);
			console.log('player : '+ PilihanPlayer);
			console.log('hasil : '+ hasil);

			const compGambar = document.querySelector('.img-komputer');
			compGambar.setAttribute('src','img/'+PilihanComputer+'.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);

	});

});




// cara manual
// pGajah.addEventListener('click', function(){

// 	const PilihanComputer = getPilihanComp();
// 	const PilihanPlayer = pGajah.className;
// 	const hasil = getHasil(PilihanComputer,PilihanPlayer);

// 	console.log('comp : '+ PilihanComputer);
// 	console.log('player : '+ PilihanPlayer);
// 	console.log('hasil : '+ hasil);

// 	const compGambar = document.querySelector('.img-komputer');
// 	compGambar.setAttribute('src','img/'+PilihanComputer+'.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// pOrang.addEventListener('click', function(){

// 	const PilihanComputer = getPilihanComp();
// 	const PilihanPlayer = pOrang.className;
// 	const hasil = getHasil(PilihanComputer,PilihanPlayer);

// 	console.log('comp : '+ PilihanComputer);
// 	console.log('player : '+ PilihanPlayer);
// 	console.log('hasil : '+ hasil);

// 	const compGambar = document.querySelector('.img-komputer');
// 	compGambar.setAttribute('src','img/'+PilihanComputer+'.png');


// });

// pSemut.addEventListener('click', function(){

// 	const PilihanComputer = getPilihanComp();
// 	const PilihanPlayer = pSemut.className;
// 	const hasil = getHasil(PilihanComputer,PilihanPlayer);

// 	console.log('comp : '+ PilihanComputer);
// 	console.log('player : '+ PilihanPlayer);
// 	console.log('hasil : '+ hasil);

// 	const compGambar = document.querySelector('.img-komputer');
// 	compGambar.setAttribute('src','img/'+PilihanComputer+'.png');

// });
