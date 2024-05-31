//fasy Values = 0 undefined null false

// if( 0 ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('****************************');

// if( null ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('****************************');

// if( false ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('****************************');

// if( undefined ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');

// console.log('****************************');

// if( true){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('****************************');

// if( 'Jimmy' ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('****************************');

// if( 10 ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// console.log('****************************');

// if( [] ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }


//or operator ( || ) = skip falsy value

// console.log( 0 || 'Kite' );
// console.log(false || null || 567);
// console.log( true || 43 );
// console.log( undefined || null );
// console.log( undefined || null || false);
// console.log( undefined || null ||false || 0);

//And Operator(&&) = target falsy values

// console.log( true && null );
// console.log( undefined && null && false );
// console.log( 45 && 'Pea' && 0 );
// console.log( 'red' && 54 );
// console.log( 'red' && 54 && true);
// console.log( 'red' && 54 && true && 'Grass');

//conditional Statement

// if this-happens then do-this else do-that

// if(condition){
//     // st1
// }else{
//     // st2
// }

// if(true){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// if(false){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// if( 44 > 56 ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

// if( 44 == 44 ){
//     console.log('papaya');
// }else{
//     console.log('Kettle');
// }

//multiple condition

// if(55==56){
//     console.log('Hen');

// }else if(32>34){
//     console.log('Sam');

// }else if(10%2==0){
//     console.log( 'Lemon' );
// }else{
//     console.log('NONE');
// }

// if(55==55){
//     console.log('Hen');

// }else if(32<34){
//     console.log('Sam');

// }else if(10%2==0){
//     console.log( 'Lemon' );
// }else{
//     console.log('NONE');
// }

//switch case

// let x = 66

// switch(x){
//     case 44 : console.log('Orange');
//     break;
//     case 55 : console.log('Rain');
//     break;
//     case 66 : console.log('Spring');
//     break;
//     default:console.log('NONE');
//     break;
// }

// let x = 66

// switch(x){
//     case 44 : console.log('Orange');
//     break;
//     case 55 : console.log('Rain');
//     break;
//     case 76 : console.log('Spring');
//     break;
//     default:console.log('NONE');
//     break;
// }

// let x = 66

// switch(x){
//     case 66 : console.log('Orange');
//     break;
//     case 66 : console.log('Rain');
//     break;
//     case 66 : console.log('Spring');
//     break;
//     default:console.log('NONE');
//     break;
// }

//ternary Operator ?

// let one = (condition) ? st1 : st2

// let one = (33==33) ? 'Jar' : 'Frank'
// console.log(one);

// let a = (200%2 === 1) ? 'even' : ' odd'
// console.log(a);

//multiple condtions  using ternary

// let salary = 15000
// if(salary < 15000) console.log("developer");
// else if(salary > 15000) console.log('manager');
// else console.log('INTERN');

// let salary = 15000

// salary < 15000 ?
// console.log('DEVELOPER') 
// :
// salary > 15000 ?
// console.log('Manager')
// :
// console.log('INTERN');

//ex1 evem or odd

// let x = 9

// if( x%2 === 0 ) console.log('EVEN');
// else console.log('ODD');

//ex 2 greater between 2 num

// let x = 10
// let y = 14


// if(x > y) console.log('X is Greater');
// else console.log('Y is Greater');

//ex3 num should be between 50 and 100

// let num = 40

// if(num > 50 && num < 100){
//     console.log('In Range');
// }else {
//     console.log('Not In Range');
// }