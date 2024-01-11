let a0='a0'

function f2(){
    let a2='a2';

    console.log(a0,a1,a2);
}

function fn1(){
    let a1='a1';

    console.log(a0,a1);
    f2();
}

fn1();