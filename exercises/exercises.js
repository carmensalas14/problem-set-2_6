// Question 1
const log = (obj) => {
 for(let prop in obj){
   console.log(prop + ": " + obj[prop]);
 }
};


// Question 2
const totalProps = (obj) => {
    let total = 0;
    for(let prop in obj){
       total += 1;
     }
     return total;
}

// Question 3
const listBooks = (obj) => {
    for (let i=0; i < obj.length; i++){
        console.log (obj[i].title + "was written by" + obj[i].author + '.');
    }
}

// Question 4
const repeatedCharacters = (string) => {
   let obj = {};
   let arrString = string.toLowerCase().split('');
   for (let i=0;i< arrString.length; i++ ){ 
       if (arrString[i] in obj){
           obj[arrString[i]]+=1;
       }else{
           obj[arrString[i]]=1;
       }
   }
   for (let prop in obj){
     if (obj[prop]===1){
       delete obj[prop];
     }
   }
   return obj;
};

// Don't write below this line
module.exports = {
  totalProps,
  repeatedCharacters,
}


function reverseNumber (number){
 number.toString()
 number.reverse().toNum();
 
 return number;
  
}