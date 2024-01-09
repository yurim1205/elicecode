// swithch case: 목록 분류 시 자주 사용

function Category(category){
    switch(category){
        case 0:
            console.log('상의')
            break;

        case 1:
            console.log('하의')
            break;

        case 2:
            console.log('신발')
            break;
    }

    Category(0);
    Category(1);
}
