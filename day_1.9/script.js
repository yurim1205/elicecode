const addForm = document.querySelector('.add');
const list = document.querySelector('.memos');
const alertmsg = document.getElementById('alertmsg');
const search = document.querySelector('.search input');

// function saveMemo(memotext) {

// }

const saveMemo = memotext => {

    const html = `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
        </li>`

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const memo = addForm.add.value;
    console.log(memo);
    // saveMemo(memo);

    //비어있는 메모 방지
    if (memo.length) {
        //문자가 존재한다면
        saveMemo(memo);
        alertmsg.classList.add('hidden')
        addForm.add.value = '';
    }

    else {
        // display: none hidden 클래스를 제거해주면
        alertmsg.classList.remove('hidden');
    }
})

list.addEventListener('click', e => {
    //e.target.classList.contains('delete') 포함하고 있다면 삭제
    if (e.target.classList.contains('delete')) {
        //삭제
        e.target.parentElement.remove();
    }
})

const filterMemo = memo => {

    Array.from(list.children)
        .filter((memotext) => !memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.add('filtered'));

    Array.from(list.children)
        .filter((memotext) => memotext.textContent.includes(memo))
        .forEach((memotext) => memotext.classList.remove('filtered'))
}


search.addEventListener('keyup', e => {
    const searchText = search.value;
    console.log(searchText);
    filterMemo(searchText);
})
