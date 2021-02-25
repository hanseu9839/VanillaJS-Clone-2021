const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
<<<<<<< HEAD
    greeting = document.querySelector(".js-greetings");
=======
    gretting = document.querySelector(".js-grettings");

>>>>>>> 36e8e5050996b02d068b2eacdd98230ccfb49500
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
<<<<<<< HEAD
=======
    //입력받은 value를 localstorge에 저장하기 위해서.
>>>>>>> 36e8e5050996b02d068b2eacdd98230ccfb49500
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
<<<<<<< HEAD
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askFormName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askFormName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}
init();
=======
    //입력시에, 결과값은 다른곳으로 가고 새로고침 되는 것을 막음
    event.preventDefault(); //stap 1.
    //input의 값을 현재 값에 넣기
    const currentValue = input.value;
    //paintgretting(text)에 text를 출력주해는 것이기에, 함수 불러와서 결과 값 넣기
    paintGretting(currentValue);
    saveName(currentValue);

}

function askForName() {
    //currentUser가 없을 때 요청
    form.classList.add(SHOWING_CN);
    //submit 버튼을 누를 시 handlesubmit을 실행.
    form.addEventListener("submit", handleSubmit)

}

//이름 색칠 함수 (로컬스토리지에 유저가 있을 경우)
function paintGretting(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

//localstorage에서 이름 불러오는 작업.
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        //유저 없는 경우
        askForName();
    }
    else {
        //else 일 경우 이름 색칠하기 ( 로컬스토리지에 유저가 있을 경우)
        paintGretting(currentUser);
    }
}
function init() {
    loadName();
}
init();
>>>>>>> 36e8e5050996b02d068b2eacdd98230ccfb49500
