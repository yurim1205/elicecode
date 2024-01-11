let member= {
    name :'유림',
    age: 25,
    email: 'eoulim3237@naver.com',
    tel: '000-0000-0000'
}

function User(name,age,email,tel){
    this.name=name;
    this.age=age;
    this.email=email;
    this.tel=tel;
}

// new가 있으면 생성자임
let newUser = new User('유림',25,'gmail@gmail.com','000-0000-0000')
let baekhyun= new User('백현',32,'b@gmail.com','111-1111-1111')

console.log(newUser);
console.log(baekhyun);