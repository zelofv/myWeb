const on = JSON.parse(localStorage.getItem("on"));
const account = JSON.parse(localStorage.getItem(on.account));

function check() {
    if (on != null && on.isOn && account != null) {
        if (account.myId === on.account && on.pwd === account.myPassword) {
            document.getElementById("userName").innerHTML = account.myName;
            return;
        }
    }
    window.location.href = "../html/login.html?unLogin";

}

function cancel() {
    if (confirmCancel()) {
        on.isOn = false;
        localStorage.removeItem("on");
        localStorage.setItem("on", JSON.stringify(on));
        alert("注销成功，请重新登录");
        location.reload();
        // check();
    }
}

function confirmCancel() {
    return confirm("您真的要注销吗？") === true;
}

function displayName() {
    alert("昵称: " + account.myName + "\nID: " + account.myId);
}