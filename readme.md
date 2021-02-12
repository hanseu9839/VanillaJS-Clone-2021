filter는 true인 것만 값이 나올수있도록 만들어주는 거임 즉, id값이 같지 않다면 return으로 인해서 반환해준다. 즉, filter로 인해 변수값이 배열 형태로 저장됨 약간 필터링하는 것이다.  즉, 참인값은 제외해주는 느낌이 filter이다. 

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
}

