// <body onload="check();"> 加载时检查是否有登录状态
const on = JSON.parse(localStorage.getItem("on"));

function check() {
    if (on != null && on.isOn) {
        const account = JSON.parse(localStorage.getItem(on.account));
        if (account != null) {
            if (account.myId === on.account && on.pwd === account.myPassword) {
                // 修改导航栏的 userName 显示值
                document.getElementById("userName").innerHTML = account.myName;
                // 在 url 后加上用户ID
                if (location.href.indexOf('?') === -1) {
                    location.href = location.href.split("?")[0] + "?user=" + account.myId;
                }
                return;
            }
        }
    }
    window.location.href = "../html/login.html?unLogin";

}

// 注销
function cancel() {
    if (confirmCancel()) {
        on.isOn = false;
        // localStorage.removeItem("on");
        localStorage.setItem("on", JSON.stringify(on));
        alert("注销成功，请重新登录");
        location.reload(); // 重载刷新页面
    }
}

// 提示确认继续注销
function confirmCancel() {
    return confirm("您真的要注销吗？") === true;
}

function displayName() {
    let account = JSON.parse(localStorage.getItem(on.account));
    alert("昵称: " + account.myName + "\nID: " + account.myId +
        "\nEmail: " + account.myEmail);
}

function toChange() {
    window.location.href = '../html/change_password.html?user=' + JSON.parse(localStorage.getItem(on.account)).myId;
}