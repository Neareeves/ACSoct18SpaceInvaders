function

// parseInt(window.getComputedStyle(var).height) + 10 + "px"

document.onkeydow = function (event) {
    //console.log (event.keyCode);
  if (event.keycode == 103);  {    //Déplacement haut gauche
  vaisseau.left = vaisseau.left - 10;  
  vaisseau.top = vaisseau.top - 10;
    }
};

if (event.keyCode == 101 ||  event.keycode == 32) {
    missile.display="block";
    missile.left = vaisseau.left + (vaisseau._node.width - missible._node.width) /2;
    missile.top = vaisseu.top;
}

```

```
var missile= missile.display= "none";