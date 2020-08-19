// Первая задача

const firstRow = 'мама мыла раму';
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

// Надеюсь это лучше