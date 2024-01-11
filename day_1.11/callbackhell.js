console.log('주문이 들어왔습니다');

function orderCallBack(){
    console.log('결제 진행 중')
    setTimeout(() => {
       console.log('결제 완료') 
       setTimeout(()=>{
            console.log('배달 시작')
            setTimeout(() => {
                console.log('배달 완료')
                setTimeout(()=>{
                    console.log('변백현 님에게 3000원이 입금되었습니다')
                },3000)
            }, 2000);
       },2000)
    }, 3000)
}

orderCallBack();