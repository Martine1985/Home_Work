// Первая задача

/*const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let num_1 = 0;
let num_2 = 0;
function getRow(firstRow, secondRow) {
    for(let i = 0; i < firstRow.length; i++){
        let a = firstRow.charAt(i);
        if(a === 'а'){
            num_1++;
        }
    }
    for(let i = 0; i < secondRow.length;i++){
        let a = secondRow.charAt(i);
        if(a === 'a'){
            num_2++;
        }
    }
    return (num_1 > num_2) ? firstRow : secondRow;
}

let a = getRow(firstRow,secondRow);
console.log(a);
*/
// Надеюсь это лучше

// Задача 2

/*function formattedPhone(phone) {
    
   let str = '';
   str = phone;
   if(str.length == 12){
   let a = str.slice(0, 2);
   let b = str.slice(2, 5);
   let c = str.slice(5, 8);
   let d = str.slice(8, 10);
   let e = str.slice(10, 12);
   return `${a} (${b}) ${c}-${d}-${e}`;}
   else return `Enter correct number`;
}
let a = formattedPhone('+712345890');
console.log(a);*/

function callNumber(){
    let num = prompt('Enter phone number with first sign \+', '');
    if(num[0] !== '+' || num.length < 12 || num.length > 12){
        return alert('Try againe !') + callNumber();
    }
    else if(num.length == 12){
        let a = num.slice(0, 2);
        let b = num.slice(2, 5);
        let c = num.slice(5, 8);
        let d = num.slice(8, 10);
        let e = num.slice(10, 12);
   return alert(`${a} (${b}) ${c}-${d}-${e}`);}
  
}

let a = callNumber();
console.log(a);





