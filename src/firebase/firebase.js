import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCrir2FFhBVRtXdNMl7KZGFXehXuebHuzY",
    authDomain: "dd-expensify.firebaseapp.com",
    databaseURL: "https://dd-expensify.firebaseio.com",
    projectId: "dd-expensify",
    storageBucket: "dd-expensify.appspot.com",
    messagingSenderId: "sender-id",
    appId: "app-id",
    measurementId: "G-measurement-id",
  };
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export {firebase, googleAuthProvider, database as default} 

// database.ref().set({
//     username: 'Duan',
//     email       : 'ducduan2207@gmail.com',
//     age         :   25,
//     location    : {
//         city    : 'HCM',
//         postcode    :  70000
//     }
// });
// database.ref('age').set(26);
// database.ref('location/city').set('HN');
// var ref = database.ref('/location')
// ref.once('value', function(snapshot){
//     console.log(snapshot.val());
// });
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve("Massage sent!!")
//         reject("Internet interupted!!")
//     }, 3000);
// })
// console.log("start");
// promise.then((data) => {console.log(data)}).catch( error => console.log(error) );
// console.log("end");


//database.ref().remove();
 // Initialize Firebase
//  firebase.initializeApp(firebaseConfig);
// const database = firebase.database();
// database.ref().set({
//     name: 'Duan',
//     age : 18,
//     location : {
//         city: 'HCM',
//         postcode    : 70000
//     }
// })

// Update 
// database.ref('age').set(20);
// database.ref('location/city').set('HN');
// database.ref().update({
//     age : 25,
//     name : 'Nguyen Duc Duan',
//     job     : 'IT',
//     'location/city' : 'HN'
// })
//.then( () => console.log('Update successfully!!') ).catch( e => console.log(e) )

// console.log('start');

// Delete 
// database.ref('job').remove();
// database.ref('age').set(null);

//Read
// database.ref('location').once('value', snapshot => {
//     console.log(snapshot.val());
// });
// database.ref().on('value', snapshot => {
//     console.log(snapshot.val());
// });

// setTimeout( () => {
//     database.ref('location/city').set('Hai Phong')
// }, 2000 )

// setTimeout( () => {
//     database.ref('location/city').set('Da Nang')
//     database.ref().off();

// }, 4000 )

// setTimeout( () => {
//     database.ref('location/city').set('Phuong Lam')
// }, 6000 )

// const expenses = [
//                 {description : "Buy House", amount : 10000, createdAt : 1000},
//                 {description : "Buy Car", amount : 4000, createdAt : 2000},
//                 {description : "Buy Horse", amount : 2000, createdAt : 4000},
// ]
// database.ref().remove();
// //database.ref().set(expenses);

// database.ref()
// .push({description : "Buy House", amount : 4000, createdAt : 1000})
// database.ref().on('value', snapshot => {
//     let exps = [];
//     snapshot.forEach( exp => { exps.push({
//         id : exp.key,
//         ...exp.val()
//     }) })
//     console.log(exps);
// })

// database.ref().on('child_removed', snapshot => {
//     console.log(snapshot.val());
// })