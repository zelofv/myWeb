function validateForm() {
    let account = document.forms["rForm"]["rAccount"].value;
    let rName = document.forms["rForm"]["rName"].value;
    let email = document.forms["rForm"]["rEmail"].value;
    let password = document.forms["rForm"]["rPwd"].value;
    let pwd = document.forms["rForm"]["rPwdA"].value;
    if (account == null || account == "") {
        alert("用户名必须填写");
        return false;
    }

    if (!(/^[\d a-z A-Z]{3,15}$/.test(account))) {
        alert("用户名应为数字，英文，且长度限制在3-15个字符。");
        return false;
    }

    if (rName == null || rName == "") {
        alert("昵称必须填写");
        return false;
    }

    if (!(/^[\d a-z A-Z \u4e00-\u9fa5]{3,20}$/.test(rName))) {
        alert("昵称应为中文，英文，数字，且长度3-20个字符。");
        return false;
    }

    if (email == null || email == "") {
        alert("邮箱必须填写");
        return false;
    }
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
        alert("不是一个有效的 e-mail 地址");
        return false;
    }

    if (password == null || password == ""
        && pwd == null || pwd == "") {
        alert("密码必须填写");
        return false;
    }
    if (password !== pwd) {
        alert("密码输入不一致");
        return false;
    }

    if (!(/^[\d a-z A-Z]{6,20}$/.test(password))) {
        alert("密码应为英文或数字，长度为在6-20个字符");
        return false;
    }
    return true;
}

function register() {

    let user = {
        myId: document.forms["rForm"]["rAccount"].value,
        myName: document.forms["rForm"]["rName"].value,
        myEmail: document.forms["rForm"]["rEmail"].value,
        myPassword: document.forms["rForm"]["rPwd"].value,
    };

    if (validateForm()) {
        if (typeof (Storage) !== "undefined") {
            if (localStorage.getItem(user.myId) != null) {
                alert("用户名已被注册");
                return false;
            }
            if (localStorage.getItem(user.myEmail) != null) {
                alert("该邮箱已被注册");
                return false;
            }

            localStorage.setItem(user.myId, JSON.stringify(user));
            localStorage.setItem(user.myEmail, JSON.stringify(user));
            alert("注册成功，快去登录吧！");

            document.forms["rForm"]["rAccount"].value = "";
            document.forms["rForm"]["rName"].value = "";
            document.forms["rForm"]["rEmail"].value = "";
            document.forms["rForm"]["rPwd"].value = "";
            document.forms["rForm"]["rPwdA"].value = "";

            setTimeout(function () {
                window.location.href = '../html/login.html';
            }, 2000);

        } else {
            alert("浏览器不支持，请更换浏览器。");
        }
    } else {
        return false;
    }
}

const on = JSON.parse(localStorage.getItem("on"));
const account = JSON.parse(localStorage.getItem(on.account));

function check() {
    if (on != null && on.isOn && account != null) {
        if (account.myId === on.account && on.pwd === account.myPassword) {
            window.location.href = "../html/index.html";
        }
    }
}