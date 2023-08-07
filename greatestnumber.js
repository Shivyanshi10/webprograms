const n1=10;
const n2=20;
const n3=30;
let max=0;
max = (n1 > n2) ? (n1 > n3 ? n1 : n3) : (n2 > n3 ? n2 : n3);
console.log("Maximum Value between three is", max);