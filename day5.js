//function


//functional decleration 


// function funcName(parameters){
//     //code
// }

// funcName(arguments) //ivoke/call a function

//-----------------------
// parametr = variable
// function one(a,b){
//     console.log(a,b);
//     let sum = a+b
//     return sum
// }

// console.log( one( 10,15 ) );
// console.log('--------------------------------');
// console.log( one( 30,10 ) );
// console.log('--------------------------------');
// console.log( one( '100','-Cakes' ) );

//----------------------

// function one(a,b){
//     console.log(a,b);
//     let sum = a+b
//     console.log(sum);
//     return sum
// }

// console.log( one( 10,15 ) );

//----------------------------------------''

// function one(a,b,c){
//     console.log(a, b, c);
//     let sum = a+b
//     let ans = sum - c
//     console.log(ans);
//     return ans
// }

// console.log( one( 10,15,5 ) );
// console.log( one( 100,10,5 ) );

//--------------------------------------------

// function one(a,b,c){
//     console.log(a, b, c);
//     let sum = a+b
//     let ans = sum - c
//     console.log(ans);

//     return 'ORANGE'
// }

// console.log( one( 10,15,5 ) );
// console.log('--------------------------------');
// console.log( one( 30,10,20 ) );
// console.log('--------------------------------');


//-----------------------------------

// function two(a){
//     // console.log(887);
// return a**2
// // console.log(4545);
// return 'Lime'
// }

// console.log( two(5) );


// function one(num){
//     if(num%2===0){
//         return 'Karela'
//     }else{
//         return 'KITES';
//     }
// }

// console.log( one(31) );



// func expression

// let one =  function(p1,p2){
// return p1+p2
// }

// console.log(one( 20,20 ));


// arrow func 

// let one = (parameters) =>{
//     return //cde
// }

// console.log(one(argument));

//----------------------------------

// let one = (para) =>{
// let a = para**2 
// return a *100
// }

// console.log(one(5));

//---------------------------------

// let one = para => para *100
    
    
//     console.log(one(5));


//callback functions

// one is a high order function
// function one(x){

// return x

// }

// console.log(one(98776));

// console.log('_--------------------');

// console.log(one('Onion'));

// console.log('_--------------------');

// console.log(one(  function two(){return 'PIANO'}  ));// two is a call back func

//---------------------------

// function one(x){

//     return x
    
//     }

//     let a = one( ()=>{return 'TWO FUNC'}  )
//     console.log(a);
//     console.log(a());

//-------------------------


// function one(){

//     return function two(){
//               return  function three(){
//                      return 'FUNC THREE'
//                                     }
//                 }  
    
//     }

//     console.log(one);
//     let a = one( )
//     console.log(a);
//     let b = a()
//     console.log(b);
//     let c = b()
//     console.log(c);

