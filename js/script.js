// 1. Creare un array di oggetti. Ogni oggetto descriverà una 
// bici da 
// corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// 2. Crea un array di 10 oggetti che rappresentano una zucchina,
//  indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// 3. Crea un array di 10 oggetti che rappresentano una zucchina.
//  Dividi in due array separati le zucchine che misurano meno o più
//   di 15cm. Infine stampa separatamente quanto pesano i due gruppi
//    di zucchine



        //   ESERCIZIO 1
//  Creare un array di oggetti. Ogni oggetto descriverà una 
// bici da 
// corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// creo un array di oggetti

 var Bici = [
    {
    'nome' : 'x2000',
     'peso' : 8

    },
    {
     'nome' : 'fusion',
     'peso' : 7

    },
    {
     'nome' : 'sonic',
     'peso' : 5

    }


 ];

//  stampo la bici con peso minore

 var pesoMin = Bici[0];

 for( var i = 1; i < Bici.length; i++){
     if(Bici[i].peso < pesoMin.peso){
         pesoMin = Bici[i];
     }
 }
 console.log(pesoMin);


            //  ESERCIZI0 2
//  Crea un array di 10 oggetti che rappresentano una zucchina,
 //  indicandone per ognuno varietà, peso e lunghezza.
 // Calcola quanto pesano tutte le zucchine.

//  creo un array di 10 oggetti
 var zucchine = [
    {
     'varietà' : 1,
      'peso' : 2,
      'lunghezza' : 50


    },
    {
     'varietà' : 2,
     'peso' : 1,
     'lunghezza' : 60
   
   
    },
    {
     'varietà' : 3,
     'peso' : 3,
     'lunghezza' : 30
   
   
    },
    {
     'varietà' : 4,
     'peso' : 2,
     'lunghezza' : 25
   
   
    },
    {
     'varietà' : 5,
     'peso' : 1,
     'lunghezza' : 70
   
   
    },
    {
     'varietà' : 6,
     'peso' : 4,
     'lunghezza' : 67
   
   
    },
    {
     'varietà' : 7,
     'peso' : 5,
     'lunghezza' : 55
   
   
    },
    {
     'varietà' : 8,
     'peso' : 2,
     'lunghezza' : 45
   
   
    },
    {
     'varietà' : 9,
     'peso' : 1,
     'lunghezza' : 67
   
   
    },
    {
     'varietà' : 10,
     'peso' : 3,
     'lunghezza' : 34
   
   
    }


 ];
//  creo una variabile che ha come valore di partenza 0

 var pesoTot = 0;


//  calcolo la somma del peso di tutte le zucchine


 for(var i = 0; i < zucchine.length; i++){
   
       
       pesoTot = pesoTot + zucchine[i].peso;

}
console.log(pesoTot);



                // ESERCIZIO 3
//  Crea un array di 10 oggetti che rappresentano una zucchina.
//  Dividi in due array separati le zucchine che misurano meno o più
//   di 15cm. Infine stampa separatamente quanto pesano i due gruppi
//    di zucchine

// creo un array di 10 oggetti utilizzando quello dell'es precedente
var zucchine = [
    {
     'varietà' : 1,
      'peso' : 2,
      'lunghezza' : 10


    },
    {
     'varietà' : 2,
     'peso' : 1,
     'lunghezza' : 8
   
   
    },
    {
     'varietà' : 3,
     'peso' : 8,
     'lunghezza' : 30
   
   
    },
    {
     'varietà' : 4,
     'peso' : 2,
     'lunghezza' : 15
   
   
    },
    {
     'varietà' : 5,
     'peso' : 7,
     'lunghezza' :33
   
   
    },
    {
     'varietà' : 6,
     'peso' : 4,
     'lunghezza' : 6
   
   
    },
    {
     'varietà' : 7,
     'peso' : 5,
     'lunghezza' : 5
   
   
    },
    {
     'varietà' : 8,
     'peso' : 8,
     'lunghezza' : 45
   
   
    },
    {
     'varietà' : 9,
     'peso' : 5,
     'lunghezza' : 37
   
   
    },
    {
     'varietà' : 10,
     'peso' : 3,
     'lunghezza' : 7
   
   
   }


 ];

//  creo due array vuoti per la lunghezza dele zucchine

 var zucchineCorte = [];

 var zucchineLunghe = [];


//  e creo due array vuoti per il peso delle zucchine

 var zucchineCortePeso = [];

 var zucchineLunghePeso = [];


// attraverso il for e l'if dico che le zucchine <= di 15 cm vengono
// inserite nell'array zucchine corte e in quello zucchine corte peso
 for(var i = 0; i < zucchine.length; i++){
     if(zucchine[i].lunghezza <= 15){
         zucchineCorte.push(zucchine[i].lunghezza);

         zucchineCortePeso.push(zucchine[i].peso);
         
// le altre zucchine vengono inserite nell'array delle zucchine lunghe
// e in quello delle zucchine lunghe peso
     }else{
        zucchineLunghe.push(zucchine[i].lunghezza) ;
        zucchineLunghePeso.push(zucchine[i].peso);
        
     }

// stampo i risultati di lunghezza e peso
 }
 console.log( ' le zucchine corte misurano: ' + zucchineCorte);
 console.log( ' le zucchine lunghe misurano : ' +  zucchineLunghe);
console.log( ' le zucchine corte pesano : ' + zucchineCortePeso);
console.log( 'le zucchine lunghe pesano ' + zucchineLunghePeso);

// creo due variabili che partono da zero per il peso totale
  var pesoTotaleCorte = 0;
  var pesoTotaleLunghe = 0;

//   con il primo ciclo for calcolo la somma del  peso totale delle zucchine che sono
//   <= 15 cm
  

   for(var i = 0; i < zucchineCortePeso.length; i++){
   
       
            pesoTotaleCorte = pesoTotaleCorte + zucchineCortePeso[i];
            

    
     }

    //  con il secondo ciclo for calcolo la somma del peso delle zucchine
    //  superiori ai 15 cm
     for(var i = 0; i < zucchineLunghePeso.length; i++){
   
       
        pesoTotaleLunghe = pesoTotaleLunghe + zucchineLunghePeso[i];
        


 }

// infine stampo i risultati della somma del peso delle zucchine corte e lunghe
     console.log( 'il peso totale  delle zucchine corte è ' + pesoTotaleCorte);
     console.log( 'il peso totale  delle zucchine lunghe è ' + pesoTotaleLunghe);




