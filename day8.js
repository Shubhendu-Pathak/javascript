//objects

// let a = {
//     // ley:value
//     name:'Peter',
//     age:45,
//     skills:['Web Dev','Marketing'],
//     married:false
// }
// console.log(a);

// console.log(Object.keys(a));
// console.log(Object.values(a));
// console.log(Object.entries(a));


//dot method and brackewt method

// let a = {
//     // ley:value
//     name:'Peter',
//     age:45,
//     skills:['Web Dev','Marketing'],
//     married:false
// }
// console.log(a);

// //dot method
// console.log( a.name );
// console.log(a.age);
// console.log(a.skills);

// // Bracket method
// console.log( a["age"]  );
// console.log( a['skills']  );


//object destructuring

// let a = {
//     // ley:value
//     name:'Peter',
//     age:45,
//     skills:['Web Dev','Marketing'],
//     married:false
// }
// console.log(a);

// let {name,age,skills} = a
// console.log(name,age,skills);

//--------optional chaining----------------

// let name = 'Henry'

// let a ={
//     name:'Jack',
//     skills:['Web-Dev','Marketing'],
//     homeAdd:{country:'India'},
//     fullname(){
//         return 'My name is ' + this.name 
//     }
// }
// console.log(a);
// // console.log(a.fullname);
// // console.log(a.fullname());

// console.log(a.name);
// console.log(a.myname);
// console.log('********************');
// console.log(a.skills[0]);
// console.log(a.myskills?.[0]);
// console.log('********************');
// console.log(a.homeAdd.country);
// console.log(a.officeAdd?.country);
// console.log('********************');
// console.log(a.fullname());
// console.log(a.myname?.());


//nullish operator

// let name = 'Henry'

// let a ={
//     name:'Jack',
//     skills:['Web-Dev','Marketing'],
//     homeAdd:{country:'India'},
//     fullname(){
//         return 'My name is ' + this.name 
//     }
// }
// console.log(a);
// // console.log(a.fullname);
// // console.log(a.fullname());

// console.log(a.name);
// console.log(a.myname);
// console.log('********************');
// console.log(a.skills[0]);
// console.log(a.myskills?.[0] ?? 'Not Found');
// console.log('********************');
// console.log(a.homeAdd.country);
// console.log(a.officeAdd?.country ?? 'Not Available');
// console.log('********************');
// console.log(a.fullname());
// console.log(a.myname?.() ?? 'Wrong Access');

//--------------------------

// let a = {
//     age:45
// }
// console.log(a);

// a.name='Sylvestor'
// a.profession='Dancer'
// a.age=11

// console.log(a);


//mrthods

// let age = 23
// let mySalry=7890

// let a = {
//     name:'Ravi',
//     age:17,
//     // salary:function(){
//     //     return this.mySalary=this.age*1000
//     // }
//     // salary(){
//     //     return this.mySalary=this.age*1000
//     // }
//     // salary:()=>{
//     //     console.log(this.Salary);
//     //     return this.mySalary=this.age*1000
//     // }
// }

// console.log(a);
// console.log(a.salary);
// console.log(a.salary());
// console.log(a);

//-----------------------------------------

// let a = {
//     name:'Raju',
//     age:'23'
// }
// console.log(a);


// let b = {
//     name:'Sajnu',
//     age:'41' 
// }
// console.log(b);

// let   calcSalary = function(para){
//     return `${this.name} has salary of Rs${this.age*1000} after ${para} years`
// }

// //call appy

// // let x = calcSalary.call(a,21)
// // console.log(x);
// // let y = calcSalary.call(b,14)
// // console.log(y);

// let x = calcSalary.apply(a,[21])
// console.log(x);
// let y = calcSalary.apply(b,[10])
// console.log(y);

//----------------------

// let a = {
//     name:'Raju',
//     age:'23'
// }
// console.log(a);

// let b = {...a, profession:'Dancer' }
// console.log(b);