const pilihan = document.querySelectorAll("td");
const pilihanPlayer = document.querySelectorAll("ul li");

var pilihanFix = "";

// pilihan player
pilihanPlayer.forEach(function (playerPill){

	for (var i = 0; i <= pilihanPlayer.lenght; i++) {
		playerPill[i].addEventListener("click", function(){
			if ( playerPill[i] == 0 ) {
				pilihanFix = "X";
				pilihan.forEach(function (pill){
					// console.log(pill);
					for (var p = 0; p <= pilihan.length; i++) {
						pill[p].addEventListener("click", function(){
							pill[p].innerHTML = pilihanFix;
						});
					}
				});

			} else {
				pilihanFix = "O";
			}
		});
	}

});


// mekanik