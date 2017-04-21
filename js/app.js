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

document.querySelector('#click').onclick = function () {

var jugadorescinco = document.getElementById('cincojug').getAttribute('data-jugadores');

var nuevosort = document.getElementById('dios_uno').getAttribute('data-sorteo');

// contador de rondas

var marcador = document.getElementById('rondas');
var rondacero = marcador.getAttribute('data-rondas');
++rondacero;
marcador.setAttribute('data-rondas', rondacero);
marcador.innerHTML = '<a class="marronda">Ronda: '+rondacero+'</a>';


// para cinco jugadores

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

    document.getElementById('dios_uno').setAttribute('data-sorteo', 'si');
  }

  // para dos jugadores

  else if ((jugadorescinco) === '2' && (nuevosort) === 'si') {

    var diosoculto = document.getElementById('img_cuatro').getAttribute('data-dios');

    var imgdiosuno = document.getElementById('img_uno');
    imgdiosuno.style.animation = 'tres 0.5s forwards';
    var imgdiosdos = document.getElementById('img_dos');
    imgdiosdos.style.animation = 'tres 0.7s forwards';
    var imgdiostres = document.getElementById('img_tres');
    imgdiostres.style.animation = 'tres 0.9s forwards';
    var imgdioscuatro = document.getElementById('img_cuatro');
    imgdioscuatro.style.animation = 'tres 1.1s forwards';

      setTimeout(function() {

        if ((diosoculto) === 'ares') {

          var bloque0 = ['poseidon', 'atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'ares'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else if ((diosoculto) === 'poseidon') {

          var bloque0 = ['ares', 'atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'poseidon'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else if ((diosoculto) === 'atenea') {

          var bloque0 = ['ares', 'poseidon', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'atenea'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else if (diosoculto === 'zeus') {

          var bloque0 = ['ares', 'poseidon', 'atenea']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'zeus'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else {
          false
        }
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
    document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" class="img_dioses_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" src="style/img/'+azul_4+'.png">';

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

  // para cuatro jugadores

  else if ((jugadorescinco) === '4' && (nuevosort) === 'si') {

    var diosoculto = document.getElementById('img_cuatro').getAttribute('data-dios');

    var imgdiosuno = document.getElementById('img_uno');
    imgdiosuno.style.animation = 'tres 0.5s forwards';
    var imgdiosdos = document.getElementById('img_dos');
    imgdiosdos.style.animation = 'tres 0.7s forwards';
    var imgdiostres = document.getElementById('img_tres');
    imgdiostres.style.animation = 'tres 0.9s forwards';
    var imgdioscuatro = document.getElementById('img_cuatro');
    imgdioscuatro.style.animation = 'tres 1.1s forwards';

      setTimeout(function() {

        if ((diosoculto) === 'ares') {

          var bloque0 = ['poseidon', 'atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'ares'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else if ((diosoculto) === 'poseidon') {

          var bloque0 = ['ares', 'atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'poseidon'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else if ((diosoculto) === 'atenea') {

          var bloque0 = ['ares', 'poseidon', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'atenea'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else if (diosoculto === 'zeus') {

          var bloque0 = ['ares', 'poseidon', 'atenea']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'zeus'
          var azul_2 = bloque1[0]
          var azul_3 = bloque1[1]
          var azul_4 = bloque1[2]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';
        }
        else {
          false
        }
      }, 750);

  }

  else if ((jugadorescinco === '4') && (nuevosort === 'no')) {
  
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
    document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" class="img_dioses_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" src="style/img/'+azul_4+'.png">';

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

// para tres jugadores 

  else if ((jugadorescinco) === '3' && (nuevosort) === 'si') {

    var diosoculto = document.getElementById('img_cuatro').getAttribute('data-dios');

    var otrodiosoculto = document.getElementById('img_tres').getAttribute('data-dios');

    var imgdiosuno = document.getElementById('img_uno');
    imgdiosuno.style.animation = 'tres 0.5s forwards';
    var imgdiosdos = document.getElementById('img_dos');
    imgdiosdos.style.animation = 'tres 0.7s forwards';
    var imgdiostres = document.getElementById('img_tres');
    imgdiostres.style.animation = 'tres 0.9s forwards';
    var imgdioscuatro = document.getElementById('img_cuatro');
    imgdioscuatro.style.animation = 'tres 1.1s forwards';

      setTimeout(function() {

        if ((diosoculto) === 'ares' && (otrodiosoculto) === 'poseidon') {

          var bloque0 = ['atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'ares'
          var azul_2 = 'poseidon'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'ares' && (otrodiosoculto) === 'atenea') {

          var bloque0 = ['poseidon', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'ares'
          var azul_2 = 'atenea'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

         else if ((diosoculto) === 'ares' && (otrodiosoculto) === 'zeus') {

          var bloque0 = ['atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'ares'
          var azul_2 = 'zeus'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'atenea' && (otrodiosoculto) === 'ares') {

          var bloque0 = ['poseidon', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'atenea'
          var azul_2 = 'ares'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'atenea' && (otrodiosoculto) === 'poseidon') {

          var bloque0 = ['ares', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'atenea'
          var azul_2 = 'poseidon'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

         else if ((diosoculto) === 'atenea' && (otrodiosoculto) === 'zeus') {

          var bloque0 = ['ares', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'atenea'
          var azul_2 = 'zeus'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'poseidon' && (otrodiosoculto) === 'ares') {

          var bloque0 = ['atenea', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'poseidon'
          var azul_2 = 'ares'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'poseidon' && (otrodiosoculto) === 'atenea') {

          var bloque0 = ['ares', 'zeus']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'poseidon'
          var azul_2 = 'atenea'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

         else if ((diosoculto) === 'poseidon' && (otrodiosoculto) === 'zeus') {

          var bloque0 = ['ares', 'atenea']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'poseidon'
          var azul_2 = 'zeus'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'zeus' && (otrodiosoculto) === 'ares') {

          var bloque0 = ['poseidon', 'atenea']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'zeus'
          var azul_2 = 'ares'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else if ((diosoculto) === 'zeus' && (otrodiosoculto) === 'atenea') {

          var bloque0 = ['ares', 'poseidon']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'zeus'
          var azul_2 = 'atenea'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

         else if ((diosoculto) === 'zeus' && (otrodiosoculto) === 'poseidon') {

          var bloque0 = ['ares', 'atenea']
          var sorteo0 = bloque0.shuffle();
          var sorteo1 = sorteo0.shuffle();
          var bloque1 = sorteo1.shuffle();
          var azul_1 = 'zeus'
          var azul_2 = 'poseidon'
          var azul_3 = bloque1[0]
          var azul_4 = bloque1[1]
  
          document.getElementById('dios_uno').innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
          document.getElementById("dios_dos").innerHTML = '<img id="img_dos" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
          document.getElementById("dios_tres").innerHTML = '<img id="img_tres" style="visibility: hidden;" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
          document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';

          var imgdiosuno = document.getElementById('img_uno');
imgdiosuno.style.animation = 'uno 1s forwards';
          var imgdiosdos = document.getElementById('img_dos');
imgdiosdos.style.animation = 'uno 1.20s forwards';
          var imgdiostres = document.getElementById('img_tres');
imgdiostres.style.animation = 'uno 1.40s forwards';
          var imgdioscuatro = document.getElementById('img_cuatro');
imgdioscuatro.style.animation = 'uno 1.60s forwards';

  document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')
        }

        else {
          false
        }
      }, 750);

  }

  else if ((jugadorescinco === '3') && (nuevosort === 'no')) {

    var imgdiosuno = document.getElementById('img_uno');
    if (imgdiosuno) {imgdiosuno.style.animation = 'tres 1s forwards';}
    var imgdiosdos = document.getElementById('img_dos');
    if (imgdiosdos) {imgdiosdos.style.animation = 'tres 1.20s forwards';}
    var imgdiostres = document.getElementById('img_tres');
    if (imgdiostres) {imgdiostres.style.animation = 'tres 1.40s forwards';}
    var imgdioscuatro = document.getElementById('img_cuatro');
    if (imgdioscuatro) {imgdioscuatro.style.animation = 'tres 1.60s forwards';}

    setTimeout(function() {
  
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
    document.getElementById("dios_tres").innerHTML = '<img id="img_tres" class="img_dioses_tres" style="visibility: hidden;" data-dios="'+azul_3+'" src="style/img/'+azul_3+'.png">';
    document.getElementById("dios_cuatro").innerHTML = '<img id="img_cuatro" class="img_dioses_cuatro" style="visibility: hidden;" data-dios="'+azul_4+'" src="style/img/'+azul_4+'.png">';

    var imgdiosuno = document.getElementById('img_uno');
    imgdiosuno.style.animation = 'uno 1s forwards';
    var imgdiosdos = document.getElementById('img_dos');
    imgdiosdos.style.animation = 'uno 1.20s forwards';
    var imgdiostres = document.getElementById('img_tres');
    imgdiostres.style.animation = 'uno 1.40s forwards';
    var imgdioscuatro = document.getElementById('img_cuatro');
    imgdioscuatro.style.animation = 'uno 1.50s forwards';

    document.getElementById('dios_uno').setAttribute('data-sorteo', 'si')

      }, 700);
  }
}

// boton para dos jugadores

document.querySelector('#clickdos').onclick = function () {

var juegosados = confirm('¿Cambiar a dos jugadores?');

  if (juegosados === true) {

    var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '2');

    document.getElementById('dosjug').style.visibility ='hidden';
    document.getElementById('tresjug').style.visibility ='visible';
    document.getElementById('cuatrojug').style.visibility ='visible';
    document.getElementById('cincojug').style.visibility ='visible';

      setTimeout(function() {

        var imgdiosuno = document.getElementById('img_uno');
        if (imgdiosuno) {imgdiosuno.style.animation = 'tres 1s forwards';}
        var imgdiosdos = document.getElementById('img_dos');
        if (imgdiosdos) { imgdiosdos.style.animation = 'tres 1.20s forwards';}
        var imgdiostres = document.getElementById('img_tres');
        if (imgdiostres) {imgdiostres.style.animation = 'tres 1.40s forwards';}
        var imgdioscuatro = document.getElementById('img_cuatro');
        if (imgdioscuatro) {imgdioscuatro.style.animation = 'tres 1.60s forwards';}

      }, 350);

    document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')

   }
}


// boton para cuatro jugadores

document.querySelector('#clickcuatro').onclick = function () {

var juegosados = confirm('¿Cambiar a cuatro jugadores?');

  if (juegosados === true) {

    var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '4');

    document.getElementById('dosjug').style.visibility ='visible';
    document.getElementById('tresjug').style.visibility ='visible';
    document.getElementById('cuatrojug').style.visibility ='hidden';
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

// boton para tres jugadores

document.querySelector('#clicktres').onclick = function () {

var juegosados = confirm('¿Cambiar a tres jugadores?');

  if (juegosados === true) {

    var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '3');

    document.getElementById('dosjug').style.visibility ='visible';
    document.getElementById('tresjug').style.visibility ='hidden';
    document.getElementById('cuatrojug').style.visibility ='visible';
    document.getElementById('cincojug').style.visibility ='visible';

      setTimeout(function() {

        var imgdiosuno = document.getElementById('img_uno');
        if (imgdiosuno) {imgdiosuno.style.animation = 'tres 1s forwards';}
        var imgdiosdos = document.getElementById('img_dos');
        if (imgdiosdos) {imgdiosdos.style.animation = 'tres 1.20s forwards';}
        var imgdiostres = document.getElementById('img_tres');
        if (imgdiostres) {imgdiostres.style.animation = 'tres 1.40s forwards';}
        var imgdioscuatro = document.getElementById('img_cuatro');
        if (imgdioscuatro) {imgdioscuatro.style.animation = 'tres 1.50s forwards';}

      }, 350);

    document.getElementById('dios_uno').setAttribute('data-sorteo', 'no')

   }
}

// boton para cinco jugadores

document.querySelector('#clickcinco').onclick = function () {

var juegosados = confirm('¿Cambiar a cinco jugadores?');

  if (juegosados === true) {

    var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '5');

    document.getElementById('dosjug').style.visibility ='visible';
    document.getElementById('tresjug').style.visibility ='visible';
    document.getElementById('cuatrojug').style.visibility ='visible';
    document.getElementById('cincojug').style.visibility ='hidden';

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
