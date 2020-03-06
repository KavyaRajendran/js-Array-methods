//ARRAY METHODS

let arr = [{name:'a'},{name:'b'},{name:'c'}];
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

arr.forEach(item,index,arr) {
  console.log(item);
}