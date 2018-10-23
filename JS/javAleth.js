

// parseInt(window.getComputedStyle(var).height) + 10 + "px"


	var sens = 0;
		function MoveRightTheAliens() {
			let carreUnTop = parseInt(conteneurAlien.style.top);
			let carreUnLeft = parseInt(conteneurAlien.style.left);
			if(conteneurAlien.style.left >= '900px') {
				sens = 1;
				conteneurAlien.style.top = (parseInt(carreUnTop) + 50 + "px");

			}
			else if (conteneurAlien.style.left <= '0px')
			{
				sens = 0;
				conteneurAlien.style.top = (parseInt(carreUnTop) + 50 + "px");
			}
			// carreUn = conteneurAlien.style.backgroundColor = "red";
			if (sens == 0) {
				conteneurAlien.style.left = (parseInt(carreUnLeft) + 122 + "px");
				console.log(carreUnLeft);
			} else {
				conteneurAlien.style.left = parseInt(carreUnLeft) - 122 + "px";
			}
		}
		setInterval(MoveRightTheAliens, 2000);







// document.onkeydow = function (event) {
//     //console.log (event.keyCode);
//   if (event.keycode == 103);  {    //Déplacement haut gauche
//   vaisseau.left = vaisseau.left - 10;  
//   vaisseau.top = vaisseau.top - 10;
//     }
// };

// if (event.keyCode == 101 ||  event.keycode == 32) {
//     missile.display="block";
//     missile.left = vaisseau.left + (vaisseau._node.width - missible._node.width) /2;
//     missile.top = vaisseu.top;
// }

// ```

// ```
// var missile= missile.display= "none";