require('dotenv').config();

const server = require('./api/server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});

// //this function expects to receive either a 1 or a 2
// function someProcedure(a) {
//     if(a==1) {
//         return 5;
//     } else if(a == 2) {
//         return 10;
//     }

//     throw new Error("a should be 1 or 2");
// }

// function someOtherProcedure(a, b) {
//     return someProcedure(a) + b;
// }

// try {
//     console.log(someOtherProcedure(3, 3))
// } catch(error) {
//     console.log(error.message)
// }


//synchronous code --> 
// function f() {
//     return 5;
// }

// //asynchronous code --> any function that may have some later effect after the function has returned
// function g() {
//     setTimeout(() => console.log('blah'), 1000);
//     return 5;
// }

// let x = f();
// let y = g();

// //callback version
// function after1Second(callback) {
//     setTimeout(callback, 1000);
// }

// after1Second(() => console.log('it worked!'))

// //promisy version
// function after1SecondPromise(fail) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             if(fail == true) {
//                 reject(new Error('error!!'))
//             } else {
//                 resolve()
//             }
//         }, 1000)
//     })
// }

// after1SecondPromise()
//     .then(() => console.log('it worked!'))
//     .then(after1SecondPromise(true))
//     .then(() => console.log('it worked!'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked!'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked!'))
//     .then(after1SecondPromise)
//     .then(() => console.log('it worked!'))
//     .then(after1SecondPromise)
//     .catch(err => console.log(err))


// //async await
// async function thing() {
//     try {
//         await after1SecondPromise();
//         console.log('it worked');
//         await after1SecondPromise();
//         console.log('it worked');
//         await after1SecondPromise();
//         console.log('it worked');
//         await after1SecondPromise();
//         console.log('it worked');
//         await after1SecondPromise();
//         console.log('it worked');
//     } catch(err) {
//         console.log(err)
//     }
    
// }
//async does 2 things -- 1) allow await keyword; 2) automatically return async function

// thing();