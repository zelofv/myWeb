// 检查是否已登录
const on = JSON.parse(localStorage.getItem("on"));

function check() {
    if (on != null && on.isOn) {
        const account = JSON.parse(localStorage.getItem(on.account));
        if (account != null) {
            if (account.myId === on.account && on.pwd === account.myPassword) {
                return;
            }
        }
    }
    window.location.href = "../html/login.html?unLogin";
}

function changePwd() {
    let oldPwd = document.forms["cForm"]["oldPwd"].value;
    let newPwd = document.forms["cForm"]["newPwd"].value;
    let newPwdA = document.forms["cForm"]["newPwdA"].value;

    if (oldPwd == null || oldPwd === "") {
        alert('请输入旧密码');
        return false;
    }
    if (oldPwd !== on.pwd) {
        alert("旧密码输入错误，请重新输入");
        return false;
    }

    if ((newPwd == null || newPwd === "")
        && (newPwdA == null || newPwdA === "")) {
        alert("请输入新密码");
        return false;
    }
    if (isPwd(newPwd) && isPwd(newPwdA)) {
        if (newPwd !== newPwdA) {
            alert("两次新密码输入不一致");
            return false;
        } else if (newPwd === oldPwd) {
            alert("新密码与旧密码不能一样！");
            return false;
        } else {
            change(newPwd);
            alert("密码修改成功，请重新登录");
            window.location.reload();
        }
    }
    return true;
}

function isPwd(password) {
    if (!(/^[\d a-zA-Z]{6,20}$/.test(password))) {
        alert("密码应为英文或数字，长度为在6-20个字符");
        return false;
    }
    return true;
}

function change(pwd) {
    let account = JSON.parse(localStorage.getItem(on.account));
    account.myPassword = pwd;
    // 重新写入信息
    localStorage.setItem(account.myId, JSON.stringify(account));
    localStorage.setItem(account.myEmail, JSON.stringify(account));
    on.isOn = false;
    localStorage.setItem("on", JSON.stringify(on));
}