//ARRAY METHODS
let Narr = [12,3,4,5,6];
let arr = [{name:'a',dept:'ece'},{name:'b'},{name:'c'}];
for (let tempvar of arr)
{
  console.log(tempvar);
}

for(let i=0;i<arr.length;i++)
{
  console.log(arr[i]);
}

arr.forEach
(element => console.log(element));

arr.forEach((item,index,arr)=> {
  if(index>1)
  console.log(item);
})

console.log(Narr.filter(i=> i>3));

//includes ,indexof() does not work for objects 
//objects can be passed as
const arr1 = console.log(Narr.includes(2));

const arr1 = console.log(Narr.indexOf(3)); //primtive type


const arr1 = console.log(Narr.findIndex(item=>item >2)); //object

const arr1 = console.log(arr.find());

console.log(Narr.sort((a,b)=>a-b));

console.log(arr.slice(1));

reduce()

Narr.Pop();

push

shift

unshift

//rest operator
//spread operator
//query selector(all)