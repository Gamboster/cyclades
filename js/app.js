Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
    if ( i == 0 ) return this;
    while ( --i ) {
      j = Math.floor( Math.random() * ( i + 1 ) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  return this;
}

// para cinco jugadores

var jugadores = document.getElementById('cincojug').getAttribute('data-jugadores');

if (jugadores == 'si') {

document.querySelector('#click').onclick = function () {

var nuevosort = document.getElementById('dios_uno').getAttribute('data-sorteo');

if (nuevosort == 'si') {
  var imgdiosuno = document.getElementById('img_uno');
  imgdiosuno.style.animation = 'tres 0.5s forwards';
  var imgdiosdos = document.getElementById('img_dos');
  imgdiosdos.style.animation = 'tres 0.7s forwards';
  var imgdiostres = document.getElementById('img_tres');
  imgdiostres.style.animation = 'tres 0.9s forwards';
  var imgdioscuatro = document.getElementById('img_cuatro');
  imgdioscuatro.style.animation = 'tres 1.1s forwards';

    setTimeout(function() {

      var bloque0 = ['ares', 'poseidon', 'atenea', 'zeus']
      var sorteo0 = bloque0.shuffle();
      var sorteo1 = sorteo0.shuffle();
      var bloque1 = sorteo1.shuffle();
      var azul_1 = bloque1[0]
      var azul_2 = bloque1[1]
      var azul_3 = bloque1[2]
      var azul_4 = bloque1[3]
  
      document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
      document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
      document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
      document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

      var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
      var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
      var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
      var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

    }, 750);

}

else {
  
  var bloque0 = ['ares', 'poseidon', 'atenea', 'zeus']
  var sorteo0 = bloque0.shuffle();
  var sorteo1 = sorteo0.shuffle();
  var bloque1 = sorteo1.shuffle();
  var azul_1 = bloque1[0]
  var azul_2 = bloque1[1]
  var azul_3 = bloque1[2]
  var azul_4 = bloque1[3]
   
  document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" data-sorteo="no" src="style/img/'+azul_1+'.png">';
  document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
  document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
  document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

  var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
  var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
  var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
  var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.50s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'si')
}

}

}

// para dos jugadores

document.querySelector('#clickdos').onclick = function () {
  var juegosados = confirm('¿Cambiar a dos juegadores?');
    if (juegosados == true) {
    }
}
