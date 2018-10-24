
/*************************code lucas***********************/

// var hasFired;
// hasFired = 0;
// projectiles[0].style.bottom = "75px";
// projectiles[0].style.left = "400px";
// projectiles[0].style.display = "none";

// document.addEventListener('keydown', function (event) {
//     if (event.keyCode == "32" && hasFired == 0) {
//         hasFired = 1;
//         projectiles[0].style.left = parseFloat(vaisseau.style.left) + 23 + "px";
//         monTimer = setInterval(function () {
//             if (parseInt(projectiles[0].style.bottom) >= 500) {
//                 hasFired = 0;
//                 clearInterval(monTimer);
//                 projectiles[0].style.bottom = 75 + "px";
//                 projectiles[0].style.display = "none";
//                 console.log("STOP");
//             }
//             else {
//                 projectiles[0].style.display = "block";
//                 projectiles[0].style.bottom = parseFloat(projectiles[0].style.bottom) + 16 + "px";
//             }

//         }
//     }
// }, 40);
//     }
// });


pour faire apparaitre les aliens:
for (let i = 0; i < rows; i++) {
for (let j = 0; j < columns; j++) {
let aliens = document.createElement("div");
aliens.className = 'aliens';
aliens.style.bottom = - spaceWidth * i + "px";
aliens.style.left = spaceWidth * j + "px";
mechants.appendChild(aliens);
}
} 









// parseInt(window.getComputedStyle(var).height) + 10 + "px"

	if (sens == 0) {
				// conteneurAlien.style.left = timeoutGoRight;
				var nextMoveUn = parseInt(carreUnLeft) + 122;
				
				if (nextMoveUn > 900) {
					sens = 1;
					conteneurAlien.style.top = (parseInt(carreUnTop) + 50 + "px");
				} else {
					conteneurAlien.style.left = nextMoveUn + "px";
				}
			} else {
				// conteneurAlien.style.left = timeoutGoLeft;
				conteneurAlien.style.left = parseInt(carreUnLeft) - 100 + "px";
				if (parseInt(conteneurAlien.style.left) <= 0) {
					sens = 0;
					conteneurAlien.style.top = (parseInt(carreUnTop) + 50 + "px");
				}
			}
			// if (descend = 0) {
			// 	descend
			// }
		}
		setInterval(MoveRightTheAliens, 500);


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