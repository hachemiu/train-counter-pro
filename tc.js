// document.getElementById("count-el").innerText = 5

/* let firstbatch = 5
let secondbatch = 10
let count = firstbatch+secondbatch

console.log(count); */


/* let myage = 30
console.log(myage);
 */

/* let count = 1
count=2

console.log(count); */

/* function increment () {
    console.log("1");
} */
    let countEl= document.getElementById("count-el");
    let saveEl=  document.getElementById("save-el");
    let count =0;
    

function increment(){
  
    count+=1;
    countEl.innerText = count;
}


function save(){
    
    
    let countStr =count + " - ";
    saveEl.innerHTML+= countStr;
    count=0
    countEl.innerText=0
    

}




