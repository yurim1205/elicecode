function add(indexNum){
    function addNumbers(num){
        return indexNum + num;
    }

    return addNumbers;
}

let add_1=add(1);

console.log(add_1(1));
console.log(add_1(2));

let add_2=add(2);
console.log(add_2(2));
console.log(add_2(3));