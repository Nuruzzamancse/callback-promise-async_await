var promise = new Promise(function(resolve, reject){
    //Do something you need, possible async

    if(true){
        resolve("Yes it worked");//if condition satisfied then resolve promies, you can get it in then parameter
    }
    else{
        reject("It not worked"); // if condition not satisfied then reject, you can get it in the catch parameter
    }
})

//Now call the promise

promise./*if success*/then(function(result){
    console.log(result);// It prints Yes it worked
}).catch(function(e){
    console.log(e);// It prints It not worked 
})

// In ES6 you can write this like bellow

var promise = new Promise((resolve, reject)=>{
    //Do something you need, possible async

    if(true){
        resolve("Yes it worked");//if condition satisfied then resolve promies, you can get it in then parameter
    }
    else{
        reject("It not worked"); // if condition not satisfied then reject, you can get it in the catch parameter
    }
})

//Now call the promise

promise.then((result)=>{
    console.log(result);// It prints Yes it worked
}).catch((e)=>{
    console.log(e);// It prints It not worked 
})

var addFunction = (numberOne, numberTwo)=>{ //Since wee need parameter now, we will write promise inside 
	return new Promise((resolve, reject)=>{
		if(true)
			resolve(`addition of  ${numberOne} and ${numberTwo} is ${numberOne+numberTwo}`)
		else
			reject(Error("It is not possible to add"))
	})

}

addFunction(2,3/*pass the parameter*/)./*if success*/then(result=>{
	console.log(result);//print 5
})./*If unsuccess*/catch(e=>{
	console.log(e) // if rejected by promise
})


var addFunctionWihFlag = (numberOne, numberTwo, flag)=>{ //Since wee need parameter now, we will write promise inside 
	return new Promise((resolve, reject)=>{
		if(flag)
			resolve(`addition of  ${numberOne} and ${numberTwo} is ${numberOne+numberTwo}`)
		else
			reject(Error("It is not possible to add"))
	})

}

addFunctionWihFlag(2,3, false/*pass the parameter*/)./*if success*/then(result=>{
	console.log(result);//print 5
})./*If unsuccess*/catch(e=>{
    console.log(e) /* Now this will print and the output is something like Error: It is not possible to add
                                                                    at Promise (E:\callback-promise-async_await\promise-intro.js:63:11)
                                                                    at new Promise (<anonymous>)
                                                                    at addFunctionWihFlag (E:\callback-promise-async_await\promise-intro.js:59:9)
                                                                    at Object.<anonymous> (E:\callback-promise-async_await\promise-intro.js:68:1)
                                                                    at Module._compile (module.js:652:30)
                                                                    at Object.Module._extensions..js (module.js:663:10)
                                                                    at Module.load (module.js:565:32)
                                                                    at tryModuleLoad (module.js:505:12)
                                                                    at Function.Module._load (module.js:497:3)
                                                                    at Function.Module.runMain (module.js:693:10)*/
                  
})

// And now most popular setTimeout
function delayOne(duration) {
    return new Promise(function (resolve) {
     setTimeout(function () {
       resolve('This is from delay One!!');
     }, duration);
   });
 }
 
 delayOne(5000).then(function(v) {
     console.log(v);
 });

 function delayTwo(duration) {
    return new Promise(function (resolve) {
     setTimeout(function () {
     }, duration);
     resolve('This is from delay two!!');
   });
 }
 
 delayTwo(5000).then(function(v) {
     console.log(v);
 });