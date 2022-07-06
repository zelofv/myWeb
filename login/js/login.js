function validateForm(account, password) {
    if (account == null || account == "") {
        alert("用户名必须填写");
        return false;
    }

    if (!/^[\d a-z A-Z]{3,15}$/.test(account)) {
        alert("用户名应为数字，英文，且长度限制在3-15个字符。");
        return false;
    }

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
                    alert("登录成功");
                    on.isOn = true;
                    if (sessionStorage.getItem("on") != null) {
                        sessionStorage.removeItem("on");
                    }
                    sessionStorage.setItem("on", JSON.stringify(on));
                    document.forms["lForm"]["lAccount"].value = "";
                    document.forms["lForm"]["lPwd"].value = "";
                    setTimeout(function () {
                        window.location.href = '../html/index.html';
                    }, 500);
                    return true;
                }
            }

        } else {
            alert("浏览器不支持，请更换浏览器。");
        }
    }
    return false;
}