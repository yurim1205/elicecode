const user={
    name:'홍길동',
    age:30,
    email:'test@test.com',
    address:'제주도',
    rider:'배달원',
    food: ['김치찌개','제육볶음'],

    payment: function(){
        console.log('결제가 완료 되었습니다')
    },

    deliverystart: ()=>{
        console.log('배달이 시작되었습니다')
    }
}

console.log(user.name);
console.log(user.food[0]);

user.payment();
user.deliverystart();