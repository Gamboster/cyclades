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

// para hades

var onhades = document.getElementById('dios_cuatro').getAttribute('data-hades');
var hadesconfirm = document.getElementById('listadoiconos').getAttribute('data-juegodehades');

if (onhades === 'no' && hadesconfirm === 'si'){
  
  var dado1 = ['0', '1', '1', '2', '2', '3']
  var sordado1 = dado1.shuffle();

  var d1cara_1 = sordado1[0]
  var d1cara_2 = sordado1[1]
  var d1cara_3 = sordado1[2]
  var d1cara_4 = sordado1[3]
  var d1cara_5 = sordado1[4]
  var d1cara_6 = sordado1[5]

  var dado2 = ['0', '1', '1', '2', '2', '3']
  var sordado2 = dado2.shuffle();

  var d2cara_1 = sordado2[0]
  var d2cara_2 = sordado2[1]
  var d2cara_3 = sordado2[2]
  var d2cara_4 = sordado2[3]
  var d2cara_5 = sordado2[4]
  var d2cara_6 = sordado2[5]

  var dadohares = (parseInt(d2cara_6) + parseInt(d1cara_6))

  var amenaza = document.getElementById('dios_cuatro').getAttribute('data-amenaza');

  var totalamenaza = (parseInt(dadohares) + parseInt(amenaza))

  document.getElementById('dios_cuatro').setAttribute('data-amenaza', totalamenaza);

var dioshades = document.getElementById('dioshades');
dioshades.innerHTML = '<a class="amenzahades" style="animation: amenaza 1.5s forwards;" >Amenaza: '+totalamenaza+'</a>';

    if (totalamenaza >= '9') {

    document.getElementById('dios_cuatro').setAttribute('data-hades', 'si');

    }
}

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
// puede ser hades
        var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_4 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_3 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
            var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
  
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
          var puedehades = document.getElementById('dios_cuatro').getAttribute('data-hades');
          if (puedehades === 'si') {
              var azul_2 = 'hades'
              document.getElementById('dios_cuatro').setAttribute('data-hades', 'no'); 
              document.getElementById('dios_cuatro').setAttribute('data-amenaza', '0');           
          }
   
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

var cuantosson = document.getElementById('cincojug').getAttribute('data-jugadores');

  if (cuantosson !== '2') {

    var juegosados = confirm('¿Cambiar a dos jugadores?');

      if (juegosados === true) {

      var marcador = document.getElementById('rondas');
      marcador.setAttribute('data-rondas', 0);
      marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

      document.getElementById('cincojug').setAttribute('data-jugadores', '2');

      document.getElementById('colordos').style.color ='red';
      document.getElementById('colortres').style.color ='#FFF';
      document.getElementById('colorcuatro').style.color ='#FFF';
      document.getElementById('colorcinco').style.color ='#FFF';

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
}


// boton para cuatro jugadores

document.querySelector('#clickcuatro').onclick = function () {

var cuantosson = document.getElementById('cincojug').getAttribute('data-jugadores');

if (cuantosson !== '4') {

var juegosados = confirm('¿Cambiar a cuatro jugadores?');

  if (juegosados === true) {

    var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '4');

    document.getElementById('colordos').style.color ='#FFF';
    document.getElementById('colortres').style.color ='#FFF';
    document.getElementById('colorcuatro').style.color ='red';
    document.getElementById('colorcinco').style.color ='#FFF';

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
}

// boton para tres jugadores

document.querySelector('#clicktres').onclick = function () {

var cuantosson = document.getElementById('cincojug').getAttribute('data-jugadores');

if (cuantosson !== '3') {

var juegosados = confirm('¿Cambiar a tres jugadores?');

  if (juegosados === true) {

    var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '3');

    document.getElementById('colordos').style.color ='#FFF';
    document.getElementById('colortres').style.color ='red';
    document.getElementById('colorcuatro').style.color ='#FFF';
    document.getElementById('colorcinco').style.color ='#FFF';

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
}

// boton para cinco jugadores

document.querySelector('#clickcinco').onclick = function () {

var cuantosson = document.getElementById('cincojug').getAttribute('data-jugadores');

if (cuantosson !== '5') {

  var juegosados = confirm('¿Cambiar a cinco jugadores?');

    if (juegosados === true) {

      var marcador = document.getElementById('rondas');
    marcador.setAttribute('data-rondas', 0);
    marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';

    document.getElementById('cincojug').setAttribute('data-jugadores', '5');

    document.getElementById('colordos').style.color ='#FFF';
    document.getElementById('colortres').style.color ='#FFF';
    document.getElementById('colorcuatro').style.color ='#FFF';
    document.getElementById('colorcinco').style.color ='red';

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

      document.getElementById('dios_uno').setAttribute('data-sorteo', 'no');

     }
  }
}

// activar juego para hades

document.querySelector('#listadoiconos').onclick = function () {

  var acthades = document.getElementById('listadoiconos').getAttribute('data-juegodehades');

  if (acthades === 'no') {

      var confirmhades = confirm('¿Jugar con módulo Hades?');
      if (confirmhades === true) {
      
      document.getElementById('listadoiconos').setAttribute('data-juegodehades', 'si');
      document.getElementById('icon_hades').style.animation = 'girapabajo 1s forwards';

      // limpiar la pantalla

      var imgdiosuno = document.getElementById('img_uno');
      if (imgdiosuno) {imgdiosuno.style.animation = 'tres 1s forwards';}
      var imgdiosdos = document.getElementById('img_dos');
      if (imgdiosdos) {imgdiosdos.style.animation = 'tres 1.20s forwards';}
      var imgdiostres = document.getElementById('img_tres');
      if (imgdiostres) {imgdiostres.style.animation = 'tres 1.40s forwards';}
      var imgdioscuatro = document.getElementById('img_cuatro');
      if (imgdioscuatro) {imgdioscuatro.style.animation = 'tres 1.60s forwards';}

      // poner marcador rondas a 0

      var marcador = document.getElementById('rondas');
      marcador.setAttribute('data-rondas', 0);
      marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';


      }
  }
  else {

    var noconfirmhades = confirm('¿Dejar de jugar con módulo Hades?');
    if (noconfirmhades === true) {

      document.getElementById('listadoiconos').setAttribute('data-juegodehades', 'no');
      document.getElementById('icon_hades').style.animation = 'girapariba 1s forwards';
      var dioshades = document.getElementById('dioshades');
      dioshades.innerHTML = '<a class="amenzahades" style="" ></a>';

      // limpiar la pantalla

      var imgdiosuno = document.getElementById('img_uno');
      if (imgdiosuno) {imgdiosuno.style.animation = 'tres 1s forwards';}
      var imgdiosdos = document.getElementById('img_dos');
      if (imgdiosdos) {imgdiosdos.style.animation = 'tres 1.20s forwards';}
      var imgdiostres = document.getElementById('img_tres');
      if (imgdiostres) {imgdiostres.style.animation = 'tres 1.40s forwards';}
      var imgdioscuatro = document.getElementById('img_cuatro');
      if (imgdioscuatro) {imgdioscuatro.style.animation = 'tres 1.60s forwards';}

      // poner marcador rondas a 0

      var marcador = document.getElementById('rondas');
      marcador.setAttribute('data-rondas', 0);
      marcador.innerHTML = '<a class="marronda">Ronda: 0</a>';


        
    }
  }
}


document.querySelector('#icon_ayuda').onclick = function () {

  var noayuda = document.getElementById('icon_ayuda').getAttribute('data-ayuda');

  if (noayuda === 'no') {

        document.getElementById('icon_ayuda').setAttribute('data-ayuda', 'si');
        document.getElementById('icon_ayuda').style.animation = 'girapabajo 2s forwards';
        document.getElementById('ayudauno').style.animation = 'apir 1s forwards';
        document.getElementById('ayudados').style.animation = 'apir 1s forwards';
        document.getElementById('ayudatres').style.animation = 'apir 1s forwards';
        document.getElementById('ayudacuatro').style.animation = 'apir 1s forwards';
     

  }
  else {

        document.getElementById('icon_ayuda').setAttribute('data-ayuda', 'no');
        document.getElementById('icon_ayuda').style.animation = 'girapariba 2s forwards';
        document.getElementById('ayudauno').style.animation = 'desapir 1s forwards';
        document.getElementById('ayudados').style.animation = 'desapir 1s forwards';
        document.getElementById('ayudatres').style.animation = 'desapir 1s forwards';
        document.getElementById('ayudacuatro').style.animation = 'desapir 1s forwards';

  }

}
