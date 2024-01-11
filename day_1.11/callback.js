// 배달 주문이 들어오면 => 결제 => 결제 완료 => 배달 시작

function orderCallBack(){
    console.log('결제 진행 중');

    setTimeout(() => {
        console.log('결제 완료');
        
        setTimeout(()=>{
            console.log('배달 시작');
        },2000);
    }, 3000);
}

console.log('주문이 들어왔습니다');
orderCallBack();