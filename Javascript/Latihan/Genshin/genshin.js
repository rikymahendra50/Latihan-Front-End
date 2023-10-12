// // perhitungan
// function perhitungan(attack,damageBonus,damageTalent,levelKarakter,levelMusuh,resistMusuh,critDamage){

// 	const damageAwal = attack * (1 + damageBonus/100) * damageTalent/100;
	
// 	const enemyDef = (levelKarakter+100) / (levelKarakter+levelMusuh+200);

// 	const hasilResist = 1 - (resistMusuh/100);

// 	const normalDamage = damageAwal * enemyDef * hasilResist;

// 	const crit = normalDamage * (1 + critDamage/100);

// 	innerHTML(normalDamage,crit);

// }

// // tangkap tombol
const tombol = document.querySelector('button');

// // tangkap nilai inputan
// tombol.addEventListener('click', function() {
	
// 	const attack = parseFloat(document.querySelector('input[name=attack]').value);
// 	const damageBonus = parseFloat(document.querySelector('input[name=damageBonus]').value);
// 	const damageTalent = parseInt(document.querySelector('input[name=damageTalent]').value);
// 	const levelKarakter = parseInt(document.querySelector('input[name=levelKarakter]').value);
// 	const levelMusuh = parseInt(document.querySelector('input[name=levelMusuh]').value);
// 	const resistMusuh = parseInt(document.querySelector('input[name=resistMusuh]').value);
// 	const critDamage = parseInt(document.querySelector('input[name=critDamage]').value);

// 	perhitungan(attack,damageBonus,damageTalent,levelKarakter,levelMusuh,resistMusuh,critDamage);
	
// });


// const trBaru = document.createElement('tr');
// const tdBaru = document.createElement('td');	
// const trSebelum = document.querySelector('.trSebelum');

// function innerHTML(normalDamage,crit){

// 	trBaru.appendChild(tdBaru);
// 	tdBaru.setAttribute('colspan','2');
// 	trSebelum.after(trBaru);

// 	tdBaru.style.backgroundColor = 'lightgreen';

// 	tdBaru.innerHTML = 'Normal Damage '+ normalDamage.toFixed(3) + ' & Crit Damage '+ crit.toFixed(3);


// }



