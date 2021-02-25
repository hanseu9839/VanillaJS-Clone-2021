const toDoForm = document.querySelector(".js-toDoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';

//each처럼 각각 만나야됨 (todo를 필터해주는 것임)
// function filterFn(toDo){
//     return toDo.id === 1

//     //filter는 array의 모든 아이템을 통해 함수를 실행하고
//     //true(1)인 아이템들만 가지고 새로운 array를 만든다
//     /* 대략 내가 이해한게 맞다면, filter는 todo안의 배열을 받아서 이게 true인지 false인지
//         인지해서 true면 따로 array를 만드는 방식으로 걸러주는 느낌?....

// filter , each => list 에 있는 모든 item들을 불러옴
//     */

// }
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
        //모든 todos가 li의 id와 같지 않을 때
    });
    toDos = cleanToDos
    saveToDos();
}

//todos를 가져와서 로컬에 저장하는 일을 함
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    //localstorage에서 object로 사용해서 string으로 바꿔주어야함

}
function paintToDo(text) {
    //list 만들기
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    const newId = toDos.length + 1;
    /*
    const a = [1,2,3,4,5]
    a.length = 5
    const b = [];
    b.length + 1 = 1 
    고로, 여기서는 숫자를 지정해주기 위헤 사용됨
    b.push(2)
    b.length + 1 = 2가 됨. 뭐가 들어왔기 때문.
    */

    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    //todo의 할일 목록은 array(배열) 이 되어야 함 

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

//gretting과 다를 것 없이 만들어 준다.

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    //submit과 같이 작성하면 넘어가게 만들어 줌
    toDoInput.value = "";

}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        //여기서는 todo를 생성할 시 항상 보여주어야하므로 null이 굳이 있을 필요가 없음~
        const parsedToDos = JSON.parse(loadedToDos)
        //todos를 가져온 뒤 parse로 json으로 string으로 변환한 것을 다시 object로 변환함

        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        })

        //foreach로 각각의 text에 대해서 painttodo가 실행됨(각각보여지게 해줌)

    }

}


//todo 하나 지우기
// 1. localstorge에서 지우기 후 저장, 2. html에서 지우기


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();