function pene() {
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
  
var bloque1 = ['ares', 'poseidon', 'atenea', 'zeus']
bloque1.shuffle();
var azul_1 = bloque1[0]
var azul_2 = bloque1[1]
var azul_3 = bloque1[2]
var azul_4 = bloque1[3]
        
        
  
document.getElementById("dios_uno").innerHTML = '<img id="img_uno" class="img_dioses_uno" src="style/img/'+azul_1+'.png">';
document.getElementById("dios_dos").innerHTML = '<img id="img_uno" class="img_dioses_dos" src="style/img/'+azul_2+'.png">';
document.getElementById("dios_tres").innerHTML = '<img id="img_uno" class="img_dioses_tres" src="style/img/'+azul_3+'.png">';
document.getElementById("dios_cuatro").innerHTML = '<img id="img_uno" class="img_dioses_cuatro" src="style/img/'+azul_4+'.png">';
}
