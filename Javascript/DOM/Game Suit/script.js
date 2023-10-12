function comp(){
	const comp = Math.random();
	if ( comp < 0.34 ) return 'Gunting';
	if ( comp >= 0.34 && comp < 0.67) return 'Batu';
	return 'Kertas';
}

function perhitungan(comp,player){

	if ( comp == player ) return 'Seri!';
	if ( player == 'batu' ) return (comp == 'Gunting') ? 'Menang!' : 'Kalah!';
	if ( player == 'kertas' ) return (comp == 'Gunting') ? 'Kalah!' : 'Menang!';
	if ( player == 'gunting' ) return (comp == 'Kertas') ? 'Menang!' : 'Kalah!';

}


const pilihan = document.querySelectorAll('ul li');
var scorPlayer = 0;
var scorComputer = 0;

function skorHasil(hasil){

	if ( hasil === 'Menang!' ) {
		scorPlayer += 1;
		const scorPlayer1 = document.querySelector('.scor-Player p');
		return scorPlayer1.innerHTML = scorPlayer;
	} else if ( hasil === 'Kalah!' ) {
		scorComputer += 1;
		const scorComputer1 = document.querySelector('.scor-Comp p');
		scorComputer1.innerHTML = scorComputer;
	}

}

pilihan.forEach(function(pill) {

pill.addEventListener('click',function(){

	const pilihanComputer = comp();
	const pilihanPlayer = pill.className;
	const hasil = perhitungan(pilihanComputer,pilihanPlayer);

	const compGambar = document.querySelector('.komputer');
	compGambar.innerHTML = pilihanComputer;

	const info = document.querySelector('.info');
	info.innerHTML = hasil;

	const skorHasilPlayer = skorHasil(hasil);


	})

});





// console.log(pilihanPlayer);