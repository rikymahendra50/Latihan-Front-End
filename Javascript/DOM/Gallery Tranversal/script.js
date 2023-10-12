// const container = document.querySelector('.container');
// const jumbo = document.querySelector('.jumbo');
// const thumbs = document.querySelectorAll('.thumb');
// const geo = document.querySelectorAll('.geo');

 
// container.addEventListener('click',function(e) {

// 	// cek apakah yang di klik src
// 	if ( e.target.className == 'thumb' ) {

// 		jumbo.src = e.target.src;
// 		jumbo.classList.add('fade');

// 		setTimeout(function(){
// 			jumbo.classList.remove('fade');
// 		},500);

// 		thumbs.forEach(function(thumb){
// 			// if ( thumb.classList.contains('active') ) {
// 			// 	thumb.classList.remove('active');
// 			// }

// 			thumb.className = 'thumb';
// 		});

// 		e.target.classList.add('active');
// 	}

// });

// versi 2
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');
const gBesar = document.querySelector('.gBesar');

container.addEventListener('click',function(e){
  
	jumbo.src = e.target.src;
	jumbo.classList.add('fade');

	gBesar.classList.add('fade');

	if ( e.target.className == 'thumb geo' ) {
		jumbo.classList.add('geoW');
		jumbo.classList.remove('electroW');
		jumbo.classList.remove('pyroW');
		jumbo.classList.remove('anemoW');
	} else if (e.target.className == 'thumb electro') {
		jumbo.classList.add('electroW');
		jumbo.classList.remove('geoW');
		jumbo.classList.remove('pyroW');
		jumbo.classList.remove('anemoW');
		gBesar.setAttribute('src','img/raidenshogun2.png');
	} else if (e.target.className == 'thumb pyro') {
		jumbo.classList.add('pyroW');
		jumbo.classList.remove('geoW');
		jumbo.classList.remove('electroW');
		jumbo.classList.remove('anemoW');
	} else if (e.target.className == 'thumb anemo') {
		jumbo.classList.add('anemoW');
		jumbo.classList.remove('pyroW');
		jumbo.classList.remove('geoW');
		jumbo.classList.remove('electroW');
		gBesar.setAttribute('src','img/ventibesar.png');
	}

	setTimeout(function(){
		jumbo.classList.remove('fade');
		gBesar.classList.remove('fade');
	},500);

	thumbs.forEach(function(thumb){
		if ( thumb.classList.contains('active') ) {
			thumb.classList.remove('active');
		}
	});

	e.target.classList.add('active');

});