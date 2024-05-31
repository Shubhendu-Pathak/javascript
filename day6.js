// function a(){
//     return function b(){
//         return 'Func B'
//     }
// }

// console.log(a);

// let x = a()
// console.log(x);
// let y = x()
// console.log(y);


//----------------------------------

// function a(para){
//     return para
// }

// console.log(a);

// let x = a(     function b(){return 'Func B'}       )
// console.log(x);
// let y = x()
// console.log(y);

// strinngs

// let a = 'Franke - Stein'
// console.log(a);
// 
// console.log(a.length);

// console.log('------------------------');

// console.log( a[0] );
// console.log( a[1] );
// console.log( a[2] );
// console.log( a[13] );

//methods

//charAT
// console.log( a.charAt(0) );
// console.log( a.charAt(1) );
// console.log( a.charAt(2) );
// console.log( a.charAt(3) );

//includes

// console.log( a.includes('f') );
// console.log( a.includes('S') );
// console.log( a.includes('FrAnk') );

//-------------------------------------

// let a = 'Franke - Stein'
// console.log(a);

// console.log( a.indexOf('F') );
// console.log( a.indexOf('r') );
// console.log( a.indexOf('A') );


//replace lowercase uppercase

// let a = 'Franke - Stein'
// console.log(a);

// console.log(a.replace('Stein','JACOB'));

// console.log(a.toLowerCase());
// console.log(a.toUpperCase());

// let a = 'Franke - Stein'
// console.log(a);

// let x = a.replace('Franke','Franke'.toUpperCase())
// console.log(x);

// let y = x.replace('Stein','Stein'.toLowerCase())
// console.log(y);


//padStart padEnd

// let a = 'Lime'
// console.log(a);
// console.log(a.length);

// console.log( a.padStart(6,'*') );
// console.log( a.padStart(8,'V') );
// console.log( a.padStart(3,'*') );


// console.log( a.padEnd(6,'*') );


//



//substr

// let a = 'PineApple'
// console.log(a);

// console.log(a.charAt(5));
// console.log('-------------------------');

// console.log(a.substr(2));
// // console.log(a.substr(5));


// console.log(a.substr(2,4));//start, Length
// console.log(a.substr(0,3));


//substring

// let a = 'PineApple'
// console.log(a);

// console.log(a.charAt(5));
// console.log('-------------------------');

// // console.log( a.substring(5) );
// // console.log( a.substring(1) );

// // console.log( a.substring(5,8) );//..  start = 5,end-1 = 8-1=7
// console.log( a.substring(1,6) );//start,end-1


//slice

// let a = 'PineApple'
// console.log(a);

// console.log(a.charAt(7));
// console.log('-------------------------');

// console.log( a.slice(5)  );
// console.log( a.slice(7)  );
// console.log( a.slice(2,8)  );//start = 2  end = 8-1 = 7

// console.log( a.slice(-3)  );
// console.log( a.slice(-6)  );