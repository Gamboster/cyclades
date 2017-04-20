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

document.querySelector('#click').onclick = function () {


var jugadorescinco = document.getElementById('cincojug').getAttribute('data-jugadores');

var nuevosort = document.getElementById('dios_uno').getAttribute('data-sorteo');

  if ((jugadorescinco) === '5' && (nuevosort) === 'si') {

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

  else if ((jugadorescinco === '5') && (nuevosort === 'no')) {
  
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

  // para dos jugadores

  else if ((jugadorescinco) === '2' && (nuevosort) === 'si') {

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

  else if ((jugadorescinco === '2') && (nuevosort === 'no')) {
  
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

// boton para dos jugadores

document.querySelector('#clickdos').onclick = function () {

var juegosados = confirm('¿Cambiar a dos jugadores?');

  if (juegosados === true) {

    document.getElementById('cincojug').setAttribute('data-jugadores', '2');

    document.getElementById('dosjug').style.visibility ='hidden';
    document.getElementById('tresjug').style.visibility ='visible';
    document.getElementById('cuatrojug').style.visibility ='visible';
    document.getElementById('cincojug').style.visibility ='visible';

      setTimeout(function() {

        var imgdiosuno = document.getElementById('img_uno');
        imgdiosuno.style.animation = 'tres 1s forwards';
        var imgdiosdos = document.getElementById('img_dos');
        imgdiosdos.style.animation = 'tres 1.20s forwards';
        var imgdiostres = document.getElementById('img_tres');
        imgdiostres.style.animation = 'tres 1.40s forwards';
        var imgdioscuatro = document.getElementById('img_cuatro');
        imgdioscuatro.style.animation = 'tres 1.50s forwards';

      }, 350);

    document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')

   }
}
