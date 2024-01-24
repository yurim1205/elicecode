const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=>{
    if (request.readyState === 4 && request.status===200){  // 200이 통신이 완료됐다는 뜻임
        console.log(request.responseText); // 응답 결과를 문자열로 반환함
    } 

    // 통신 상태가 단순히 완료만 되면 아래 코드 반환
    else if(request.readyState ===4){
        console.log('통신 장애가 발생했습니다.')
    }
})

// http 통신
// 위 코드 내용의 통신을 할 건데 그 통신은 GET을 통한 통신이고, GET통신을 하기 위한 주소는 아래 url이라는 뜻
request.open('GET','https://jsonplaceholder.typicode.com/todos'); 
request.send();