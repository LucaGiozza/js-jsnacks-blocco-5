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





