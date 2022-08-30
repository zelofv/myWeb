let students = [{
    id: "12103020202", name: "米一", college: "计算机科学与工程学院", gender: "男", grade: 21, classNo: "121030202", age: 20
}, {
    id: "12123020214", name: "米二", college: "两江人工智能学院", gender: "男", grade: 21, classNo: "121230202", age: 21
}, {
    id: "12110020135", name: "米三", college: "药学与生物工程学院", gender: "男", grade: 21, classNo: "121100201", age: 22
}, {
    id: "12123020222", name: "米四", college: "两江人工智能学院", gender: "男", grade: 21, classNo: "121230202", age: 23
}, {
    id: "12110020116", name: "小五", college: "药学与生物工程学院", gender: "男", grade: 21, classNo: "121100201", age: 24
}, {
    id: "12103020208", name: "米六", college: "计算机科学与工程学院", gender: "男", grade: 21, classNo: "121030202", age: 25
}, {
    id: "12123020225", name: "米七", college: "两江人工智能学院", gender: "男", grade: 21, classNo: "121230202", age: 26
}, {
    id: "12123020213", name: "米八", college: "两江人工智能学院", gender: "男", grade: 21, classNo: "121230202", age: 27
}, {
    id: "12123020219", name: "米九", college: "两江人工智能学院", gender: "男", grade: 21, classNo: "121230202", age: 28
}, {
    id: "12108020215", name: "米十", college: "管理学院", gender: "男", grade: 21, classNo: "121080202", age: 29
}, {
    id: "12123020212", name: "米加", college: "两江人工智能学院", gender: "男", grade: 21, classNo: "121230202", age: 30
}, {
    id: "12110020105", name: "小减", college: "药学与生物工程学院", gender: "男", grade: 21, classNo: "121100201", age: 31
}, {
    id: "12103020206", name: "米乘", college: "计算机科学与工程学院", gender: "男", grade: 21, classNo: "121030202", age: 32
}, {
    id: "12108020214", name: "米除", college: "管理学院", gender: "男", grade: 21, classNo: "121080202", age: 33
}]
let thisPage = 1;

let stuTable = document.getElementById("studentsTable");

let allCheck = document.getElementById("allCheck");
let stuTBody = document.getElementById("showStu");
let pageNow = document.getElementById("pageNow");
let pages = document.getElementById("pages");
let stuTNum = document.getElementById("stuNum");
let checkList;
let showList = [];
//页面加载时展示前10个数据
window.onload = () => {
    check();
    fromStorage();
    showList = students;
    show(0, 10);
}

// 存到本地 local
function toStorage() {
    window.localStorage.setItem("students", JSON.stringify(students));
}

// 读取数据（需改
function fromStorage() {
    let storage = JSON.parse(window.localStorage.getItem("students"));
    if (storage === null) return;
    // students = students.length > storage.length ? students : storage;
    students = storage;
}

// 展示表格
function show(from, to, list) {
    // 若无输入 list 默认为showList
    if (list === undefined) {
        list = showList;
    }
    for (let i = from; i < to && i < list.length; i++) {
        let index = i + 1;
        let lis = list[i];
        let tr = createTr(index, lis);
        stuTBody.appendChild(tr);
    }
    pages.innerHTML = "" + (1 + Math.floor((list.length - 1) / 10));
    stuTNum.innerHTML = "" + list.length;
    checkList = getCheckList();
}

// 移除表格体并更新一个
function removeAll() {
    stuTable.removeChild(stuTBody);
    let newStuBody = document.createElement("tbody");
    newStuBody.id = "showStu";
    stuTBody = newStuBody;
    stuTable.appendChild(stuTBody);
    allCheck.checked = false;
}

// 返回 tr 标签包含内部 td
function createTr(index, lis) {
    let tr = document.createElement("tr");
    let tdList = createTdList();
    let checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.value = index;
    checkBox.setAttribute("onmouseup", "autoAllChecked(this)");
    tdList[0].appendChild(checkBox);
    tdList[1].appendChild(document.createTextNode(index + ""));
    tdList[2].appendChild(document.createTextNode(lis.id));
    tdList[3].appendChild(document.createTextNode(lis.name));
    tdList[4].appendChild(document.createTextNode(lis.college));
    tdList[5].appendChild(document.createTextNode(lis.gender));
    tdList[6].appendChild(document.createTextNode(lis.grade));
    tdList[7].appendChild(document.createTextNode(lis.classNo));
    tdList[8].appendChild(document.createTextNode(lis.age));
    let btU = document.createElement("button");
    let btD = document.createElement("button");
    btU.type = "button";
    btU.value = index;
    btU.setAttribute("onclick", "updateMenu(this)");
    btU.appendChild(document.createTextNode("修改"));
    btD.type = "button";
    btD.value = index;
    btD.setAttribute("onclick", "del(this)");
    btD.appendChild(document.createTextNode("删除"));
    tdList[9].appendChild(btU);
    tdList[9].appendChild(btD);
    for (let tdListElement of tdList) {
        tr.appendChild(tdListElement);
    }
    return tr;
}

// 创建10个td标签用数组返回
function createTdList() {
    let td = [];
    for (let i = 0; i < 10; i++) {
        td.push(document.createElement("td"));
    }
    return td;
}

// 全选框
function checkAll(first) {
    for (let check of checkList) {
        check.checked = first.checked;
    }
}

// “上一页”按钮点击事件
function pre() {
    if (thisPage === 1) {
        alert("已到达最前页");
        return;
    }
    removeAll();
    show((thisPage - 2) * 10, (thisPage - 1) * 10);

    pageNow.innerHTML = (--thisPage) + "";
}

// “下一页”按钮点击事件
function next() {
    if (thisPage === Math.floor((showList.length - 1) / 10) + 1) {
        alert("已到达尾页");
        return;
    }
    removeAll();
    show(thisPage * 10, (thisPage + 1) * 10);
    pageNow.innerHTML = (++thisPage) + "";
}

// 单独删除
function del(button, valueList, list, single) {
    if (list === undefined) {
        list = showList;
    }
    if (valueList === undefined) {
        valueList = [];
        valueList.push(parseInt(button.value));
    }
    if (single || single === undefined || valueList.length === 1) {
        if (!confirm("确定要删除 " + list[valueList[0] - 1].name + " 吗？")) {
            return;
        }
    }
    for (let value of valueList) {
        if (list === students) {
            if (value === students.length) {
                students.pop();
            } else if (value === 1) {
                students.shift();
            } else {
                let delNum = value - 1;
                list.splice(delNum, 1);
            }
        } else {
            for (let i = 0; i < students.length; i++) {
                if (students[i] === list[value - 1]) {
                    students.splice(i, 1);
                    list.splice(value - 1, 1);
                    value--;
                    console.log(students)
                }
            }
        }
    }
    refresh();
    autoChangePage();
    toStorage();
}

// 刷新表格
function refresh() {
    removeAll();
    show((thisPage - 1) * 10, thisPage * 10);
}

// 自动换页
function autoChangePage() {
    if (students.length <= (parseInt(pages.innerHTML) - 1) * 10 && students.length !== 0) {
        pages.innerHTML = parseInt(pages.innerHTML) - 1 + "";
        pre();
    } else if (students.length > parseInt(pages.innerHTML) * 10) {
        pages.innerHTML = parseInt(pages.innerHTML) + 1 + "";
        next();
    }
    if (students.length === 0) {
        pages.innerHTML = "1";
    }
}

// onmouseup 鼠标松键时触发判断 使全选框自动选中或不选
function autoAllChecked(button) {
    if (!(button === undefined)) {

        button.checked = !button.checked;
        let allChecked = true;
        for (let input of checkList) {
            if (!input.checked) {
                allChecked = false;
            }
        }
        button.checked = !button.checked;
        // 全选按钮自动选中或自动不选
        stuTable.getElementsByTagName("thead")[0].getElementsByTagName("th")[0].getElementsByTagName("input")[0].checked = allChecked;
    }
}

function delAll() {
    if (!confirm("确认删除所选学生信息吗？")) return;
    let indexList = [];
    for (let i = checkList.length - 1; i >= 0; i--) {
        if (checkList[i].checked) {
            indexList.push((i + 1 + (pageNow.innerHTML - 1) * 10));
        }
    }
    let single = false;
    if (indexList.length === 0) return; else if (indexList.length === 1) single = true;

    del(undefined, indexList, undefined, single);
    if (pageNow.innerHTML > pages.innerHTML) pre();
}

// 返回多选框标签集
function getCheckList() {
    let inputTr = stuTBody.getElementsByTagName("tr");
    let list = [];
    let allChecked = true;
    for (let inputTrElement of inputTr) {
        let input = inputTrElement.getElementsByTagName("td")[0].getElementsByTagName("input")[0];
        list.push(input);
    }
    return list;
}

// 被修改的行在数组中的索引值-1
let checkedValue = -1;

// 保存查找后数组的索引值
let buttonValue = -1;

// 显示修改界面
function updateMenu(button) {
    checkedValue = button.value;
    let obj = showList[checkedValue - 1];
    if (showList !== students) {
        console.log(1)
        for (let i = 0; i < students.length; i++) {
            if (objectEqual(students[i], obj)) {
                buttonValue = button.value;
                checkedValue = i + 1;
            }
        }
    }
    document.getElementById("update").style.display = "block";
    document.getElementById("stuIdU").value = obj.id;
    document.getElementById("stuNameU").value = obj.name;
    document.getElementById("stuCollegeU").value = obj.college;
    document.getElementById("stuGradeU").value = obj.grade;
    document.getElementById("stuClassNoU").value = obj.classNo;
    document.getElementById("stuAgeU").value = obj.age;
    let radioElements = document.getElementsByName("uGender");
    obj.gender === "男" ? radioElements[0].click() : radioElements[1].click();
    for (let p of updateForm.getElementsByTagName("p")) {
        p.style.display = "none";
    }
}

// 保存修改
function update() {
    if (!allFinish(updateForm.getElementsByTagName("input"))) return;

    let oId = document.getElementById("stuIdU").value;
    let oName = document.getElementById("stuNameU").value;
    let oCollege = document.getElementById("stuCollegeU").value;
    let oGender = document.getElementsByName("uGender")[0].checked ? "男" : "女";
    let oGrade = parseInt(document.getElementById("stuGradeU").value);
    let oClassNo = document.getElementById("stuClassNoU").value;
    let oAge = parseInt(document.getElementById("stuAgeU").value);
    let obj = {
        id: oId, name: oName, college: oCollege, gender: oGender, grade: oGrade, classNo: oClassNo, age: oAge
    }

    if (objectEqual(students[checkedValue - 1], obj)) {
        sCancel();
        return;
    }
    if (buttonValue !== -1) {
        showList.splice(buttonValue - 1, 1, obj);
    }
    students.splice(checkedValue - 1, 1, obj);
    sCancel();
    refresh();
    toStorage();
    checkedValue = -1;
}

// 判断两个 object 对象内部是否相等
function objectEqual(obj1, obj2) {
    return obj1.id === obj2.id && obj1.name === obj2.name && obj1.college === obj2.college && obj1.gender === obj2.gender && obj1.grade === obj2.grade && obj1.classNo === obj2.classNo && obj1.age === obj2.age;
}

// 新增和修改中的取消功能
function sCancel() {
    document.getElementById("update").style.display = "none";
    document.getElementById("addStu").style.display = "none";
    for (let resetEle of document.getElementsByClassName("reSet")) {
        resetEle.click();
    }
}

// 显示新增学生的菜单
function addMenu() {
    document.getElementById("addStu").style.display = "block";
    for (let i = 0; i < addForm.getElementsByTagName("p").length - 1; i++) {
        addForm.getElementsByTagName("p")[i].style.display = "block";
    }
}

// 确认添加学生
function sSubmit() {
    if (!allFinish(addForm.getElementsByTagName("input"))) return;

    let oId = document.getElementById("stuIdA").value;
    let oName = document.getElementById("stuNameA").value;
    let oCollege = document.getElementById("stuCollegeA").value;
    let oGender = document.getElementsByName("aGender")[1].checked ? "女" : "男";
    let oGrade = parseInt(document.getElementById("stuGradeA").value);
    let oClassNo = document.getElementById("stuClassNoA").value;
    let oAge = parseInt(document.getElementById("stuAgeA").value);
    let obj = {
        id: oId, name: oName, college: oCollege, gender: oGender, grade: oGrade, classNo: oClassNo, age: oAge
    }

    students.push(obj);
    searchInput.value = searchInput.value === "" ? searchInput.value : "";
    showList = students;
    sCancel();
    refresh();
    toStorage();
}

let select = document.getElementById("searchSelect");
let searchInput = document.getElementById("searchInput");
let searchList = [];
// 监听输入框内容
searchInput.oninput = () => {
    let value = searchInput.value;
    if (value.includes("'") || students.length === 0) {
        return;
    }
    pageNow.innerHTML = "1";
    if (value === "") {
        showList = students;
        refresh();
        return;
    }

    let tag = select.value;
    searchList = [];
    let obj = students[0];
    for (let key in obj) {
        if (key === tag) {
            searchList = students.filter(item => {
                return (item[key] + "").includes(value);
            })
            // for (let student of students) {
            //     let stuValue = student[key];
            //     stuValue += "";
            //     if (stuValue.includes(value)) {
            //         searchList.push(student);
            //     }
            // }
        }
    }
    showList = searchList;
    removeAll();
    thisPage = 1;
    show(0, 10);
}

// 清空输入框内容
function clearText() {
    searchInput.value = "";
    showList = students;
    refresh();
}

// 表单验证
function isId(value) {
    if (!/^1\d{10}$/.test(value))
        return false;
    return !repetitionId(value);
}

function repetitionId(id, index) {
    if (index === undefined && checkedValue !== -1) {
        index = checkedValue;
    }
    for (let i = 0; i < students.length; i++) {
        if (i === index - 1) continue;
        if (students[i].id === id) {
            return true;
        }
    }
    return false;
}

function isName(value) {
    return /^[^\x00-\xff]{2,8}$/.test(value);
}

function isClassNo(value) {
    return /^1\d{8}$/.test(value);
}

function isAge(value) {
    return value > 0 && value < 100;
}

// 新增和修改界面监听验证表单
let addForm = document.getElementById("addForm");
let updateForm = document.getElementById("updateForm");
let allFinished = false;
for (let input of addForm.getElementsByTagName("input")) {
    if (input.id.includes("College") || input.id.includes("Gender") || input.id.includes("Grade")) continue;
    input.oninput = () => {
        allFinished = reflect(input);
    }
}

for (let input of updateForm.getElementsByTagName("input")) {
    if (input.id.includes("College") || input.id.includes("Gender") || input.id.includes("Grade")) continue;
    input.oninput = () => {
        allFinished = reflect(input);
    }
}

function reflect(target) {
    let value = target.value;
    let inputId = target.id;
    if (value === "") {
        document.getElementById(inputId + "p").style.display = "none";
        return false;
    }
    let method = "is" + inputId.substring(3, inputId.length - 1);

    if (eval(method + '("' + value + '")')) {
        document.getElementById(inputId + "p").style.display = "none";
        return true;
    } else {
        document.getElementById(inputId + "p").style.display = "block";
        if (method === "isId") {
            if (repetitionId(value, checkedValue)) {
                document.getElementById(inputId + "p").innerHTML = "学号重复";
            } else {
                document.getElementById(inputId + "p").innerHTML = "学号为11位数字";
            }
        }
        return false;
    }
}

// 判断数据是否全部无误
function allFinish(inputs) {
    // if (allFinished === false) return false;
    allFinished = isId(inputs[0].value) && isName(inputs[1].value) && isClassNo(inputs[6].value) && isAge(inputs[7].value);
    return allFinished;
}

let pageSelect = document.getElementById("pageSelect");

pageNow.onclick = () => {
    pageNow.style.display = "none";
    pageSelect.style.display = "inline";
    updateOption(parseInt(pageNow.innerHTML), parseInt(pages.innerHTML));
    pageSelect.focus();

    pageSelect.onblur = () => {
        pageSelect.style.display = "none";
        pageNow.style.display = "inline";
    }
}

pageSelect.onchange = () => {
    let index = pageSelect.selectedIndex;
    let value = pageSelect.options[index].value;
    thisPage = value;
    pageNow.innerHTML = value;
    refresh();
}

// 更新下拉框
function updateOption(now, max) {
    let len = pageSelect.children.length;
    for (let i = 0; i < len; i++) {
        pageSelect.children[0].remove();
    }
    addOption(max);
    for (let i = 0; i < max; i++) {
        pageSelect.options[i].defaultSelected = pageNow.innerHTML === pageSelect.children[i].value;
    }
}

function addOption(max) {
    let min = max > 0 ? 1 : 0;

    for (let i = min; i < max + 1; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", i + "");
        option.innerHTML = i + "";
        pageSelect.appendChild(option);
    }
}


/*----------------
    登录检查及导航栏
  ----------------**/
// 加载时检查是否有登录状态
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
    alert("昵称: " + account.myName + "\nID: " + account.myId + "\nEmail: " + account.myEmail);
}

function toChange() {
    window.location.href = '../html/change_password.html?user=' + JSON.parse(localStorage.getItem(on.account)).myId;
}