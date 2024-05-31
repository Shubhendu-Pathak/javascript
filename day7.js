// arrays

// let a = 'On'
// let b = 34

// let c = ['On',21,true,87,'Pen']
// console.log(c);
// console.log(typeof c);

// console.log(c.length);

// console.log(c[0]);
// console.log(c[1]);
// console.log(c[2]);


// indexOf
// console.log(c.indexOf(21));
// console.log(c.indexOf(true));

// inlcudes
// console.log(c.includes(87));
// console.log(c.includes(87000));

// push pop shift unshift

// c.push(56)
// console.log(c);
// c.unshift(13456)
// console.log(c);
// c.pop()
// console.log(c);
// c.shift()
// console.log(c);

// loop in arrays
// let c = ['On',21,true,87,'Pen']
// console.log(c);

// for
// for(let a=0; a< c.length; a++){
//     console.log(a);
//     console.log(c[a]);
//     console.log('------');
// }

// for of
// for(let x of c){
//     console.log(x);
// }

// for in

// for(let x in c){
//     console.log(x);
// }

// forech
// c.forEach(  (ele,index,origin)=>{
//     console.log(ele+' '+index+' '+origin );
// }  )


// destructing array

// let c = ['On',21,true,87,'Pen']
// console.log(c);

// let x = c[0]
// console.log(x);
// let y = c[1]
// console.log(y);

// let [v,w,x,y,z] = c
// console.log(v,w,x,y,z);

// let [v,,,y,z] = c
// console.log(v,y,z);

// rest operator  ... = LHS  binder of ele in arrays

// let [w,x, ...y] = c
// console.log(w,x,y);

// ------------------------------------
// let a = [11,22,33,44]
// let b = [99,88,77]
// let c =['a','b']
// console.log(a,b,c);

// let d = a+b+c
// console.log(d);
// // console.log(typeof d);
// console.log('-----------------------------');
// let e = [a+b+c]
// console.log(e);
// console.log('-----------------------------');
// let f = [a,b,c]//[ [a],[b],[c]  ]
// console.log(f);
// console.log( f.flat(Infinity) );
// console.log('-----------------------------');
// let g = a.concat(b).concat('GREEN').concat(true,false,[768,564]).concat(c)
// console.log(g);
// console.log('-----------------------------');
// // spread operator ... = RHS 

// let h = [...a,'henry', ...b,'lemon-zest', ...c]
// console.log(h);

// / find filter map  reduce

// let  a= [76,34,98,54,153,46,22]
// console.log(a);

// let b = a.find( (ele,index)=>{
//     // return ele===54
//     // return ele===540
//     // return ele > 60 // use filter
// } )
// console.log(b);

// return oly matching elements
// let b = a.filter( (ele,index)=>{
//     // return ele > 60 
//     return ele != 54
// } )
// console.log(b);

// return array
// let b = a.map( (ele,index)=>{
// //   return ele+' Pen'
// return ele > 50
// } )
// console.log(b);

// reduce
// Array.reduce( (accumulator,curent-value)=>{} , initialstate(optional) )

// let a = [1,2,3,4]
// console.log(a);

// let b = a.reduce((acc,cv)=>{    return acc+cv   }  )
// console.log(b);

// acc cv 
//      1   = 1
// 1    2    3
// 3    3    6
// 6    4    10    


// with nitial state

// let b = a.reduce((acc,cv)=>{    return acc+cv   },100  )
// console.log(b);


// acc cv 
// 100     1   = 101
// 101    2    103
// 103    3    106
// 106    4    110    