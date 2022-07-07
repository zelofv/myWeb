function validateForm(account, password) {
    // return isID(account) && isPwd(password);
    if (/@/.test(account)) {
        return isEmail(account) && isPwd(password);
    } else {
        return isID(account) && isPwd(password);
    }
}

function isID(account) {
    if (account == null || account == "") {
        alert("用户名必须填写");
        return false;
    }

    if (!/^[\d a-z A-Z]{3,15}$/.test(account)) {
        alert("用户名应为数字，英文，且长度限制在3-15个字符。");
        return false;
    }
    return true;
}

function isEmail(email) {
    if (email == null || email === "") {
        alert("邮箱必须填写");
        return false;
    }
    let atPos = email.indexOf("@");
    let dotPos = email.lastIndexOf(".");
    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length) {
        alert("不是一个有效的 e-mail 地址");
        return false;
    }
    return true;
}

function isPwd(password) {
    if (password == null || password == "") {
        alert("密码必须填写");
        return false;
    }

    if (!/^[\d a-z A-Z]{6,20}$/.test(password)) {
        alert("密码应为英文或数字，长度为在6-20个字符");
        return false;
    }
    return true;
}

function login() {
    let theAccount = document.forms["lForm"]["lAccount"].value;
    let thePwd = document.forms["lForm"]["lPwd"].value;
    const on = {
        account: theAccount,
        pwd: thePwd,
        isOn: false,
    };

    if (validateForm(theAccount, thePwd)) {
        if (typeof (Storage) !== "undefined") {
            let findAccount = localStorage.getItem(theAccount);

            if (findAccount != null) {
                if (thePwd === JSON.parse(findAccount).myPassword) {
                    on.account = JSON.parse(findAccount).myId;
                    on.isOn = true;
                    if (localStorage.getItem("on") != null) {
                        localStorage.removeItem("on");
                    }
                    localStorage.setItem("on", JSON.stringify(on));
                    alert("登录成功");
                    document.forms["lForm"]["lAccount"].value = "";
                    document.forms["lForm"]["lPwd"].value = "";
                    setTimeout(function () {
                        window.location.reload();
                    }, 500);
                    return true;
                } else {
                    alert("密码输入错误");
                }
            } else {
                alert("用户名或邮箱输入错误");
            }

        } else {
            alert("浏览器不支持，请更换浏览器。");
        }
    }
    return false;
}

function check() {
    const on = JSON.parse(localStorage.getItem("on"));
    const account = JSON.parse(localStorage.getItem(on.account));
    if (on != null && on.isOn && account != null) {
        if (account.myId === on.account && account.myPassword === on.pwd) {
            window.location.href = "../html/index.html";
        }
    }
}

function switchMenu() {
    const loginCard = document.getElementById('loginCard');
    const retrieveCard = document.getElementById('retrieveCard');
    loginCard.style.display = "none";
    loginCard.style.backgroundColor = "rgba(0,0,0,0)";
    retrieveCard.style.backgroundColor = "rgba(0,0,0,0)";
    retrieveCard.style.display = "inline-block";
    retrieveCard.style.margin = "-4.8%";
}

function switchMenuA() {
    const loginCard = document.getElementById('loginCard');
    const retrieveCard = document.getElementById('retrieveCard');
    retrieveCard.style.display = "none";
    loginCard.style.display = "block";
}

function getVerificationCode() {
    let email = document.forms['reForm']["reEmail"].value;
    if (trueReEmail(email)) {
        let vCode = "";
        for (let i = 0; i < 6; i++) {
            vCode += Math.floor(Math.random() * 10);
        }
        if (sessionStorage.getItem("code") != null) {
            sessionStorage.removeItem("code");
        }
        sessionStorage.setItem('code', vCode);
        alert("您的验证码是: " + vCode);
    } else {
        alert('您输入的邮箱不正确');
    }
}

function trueReEmail(email) {
    return isEmail(email) && localStorage.getItem(document.forms['reForm']['reEmail'].value) != null;
}

function isVerificationCode(code) {
    if (sessionStorage.getItem('code') == null) {
        return false;
    } else {
        if (sessionStorage.getItem('code') === code) {
            return true;
        }
    }
}

function retrieve() {
    let code = document.forms['reForm']['reCode'].value;
    let email = document.forms['reForm']['reEmail'].value;
    let password = document.forms['reForm']['rePwd'].value;
    if (trueReEmail(email)&& isPwd(password)) {
        if (isVerificationCode(code)) {
            let account = JSON.parse(localStorage.getItem(document.forms['reForm']['reEmail'].value));
            account.myPassword = password;
            localStorage.removeItem(account.myId);
            localStorage.removeItem(account.myEmail);
            localStorage.setItem(account.myId, JSON.stringify(account));
            localStorage.setItem(account.myEmail, JSON.stringify(account));
            removeCode();
            alert('密码找回成功！快去登录吧');
        } else {
            alert('验证码错误');
            return false;
        }
    } else {
        alert("您输入的邮箱不正确");
    }
}

function removeCode() {
    if (sessionStorage.getItem('code') != null) {
        sessionStorage.removeItem('code');
    }
}