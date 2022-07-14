let topNav = document.getElementById("topNav");

// 获取滚动条滚动数值
function getScrollTop() {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

// 通过滚动条数值调整顶部导航栏样式
document.onscroll = function () {
    if (getScrollTop() < 66) {
        topNav.className = "topNav";
    } else {
        topNav.className = "topNav backFilter";
    }
}

let gBtn1 = document.getElementById("gBtn1");
let gBtn2 = document.getElementById("gBtn2");
let num = 0;

// 获取 each-image 标签下的所有元素保存到数组 rel 并返回
let imgList = document.getElementsByClassName('each-image');
let nImgList = findAllClass(imgList);
let sImgList = document.getElementsByClassName("gallery-thumbnail");
let nSImgList = findAllClass(sImgList);

// 查找目标
function findAllClass(list) {
    let rel = [];
    for (let i = 0; i < list.length; ++i) {
        if (list[i].children !== null) {
            rel = list[i].children;
            return rel;
        }
    }
}

// 轮播图左右按钮点击事件
gBtn1.onclick = () => {
    num--;
    returnNum(nImgList);
    // moveImg(nImgList, num);
    moveThumbnail(nSImgList, num);
};
gBtn2.onclick = () => {
    num++;
    returnNum(nImgList);
    // moveImg(nImgList, num);
    moveThumbnail(nSImgList, num);
};

function moveImg(list, number) {
    for (let i = 0; i < list.length; i++) {
        list[i].style.transform = "translateX(" + number * -1224 + "px)";
    }
}

// 超出范围后返回
function returnNum(tList) {
    if (num >= tList.length) {
        num = 0;
    } else if (num <= -1) {
        num = tList.length - 1;
    }
}

// 遍历找到被点击的 button
for (let i = 0; i < nSImgList.length; i++) {
    let m = i;

    nSImgList[i].onmouseover = () => {
        nSImgList[m].style.border = "4px solid rgba(181, 154, 109, 0.6)";
    }

    nSImgList[i].onmouseout = () => {
        if (m !== num) {
            nSImgList[m].style.border = '4px solid rgba(0, 0, 0, 0)';
        }
    }

    nSImgList[i].onclick = () => {
        num = m;
        moveThumbnail(nSImgList, m);

        // for (let j = 0; j < nSImgList.length; j++) {
        //     nSImgList[j].style.border = '4px solid rgba(0, 0, 0, 0)';
        //     nSImgList[j].style.transform = "translateX(" + i * -31.5 + "px)";
        // }
        // moveImg(nImgList, i);
        // nSImgList[i].style.border = "4px solid rgba(181, 154, 109, 0.6)";
    }
}

// 移动略缩图
function moveThumbnail(list, index) {
    for (let j = 0; j < list.length; j++) {
        list[j].style.border = '4px solid rgba(0, 0, 0, 0)';
        list[index].style.borderRadius = "8px";
        list[j].style.transform = "translateX(" + index * -31.5 + "px)";
    }
    list[index].style.border = "4px solid rgba(181, 154, 109, 0.6)";
    moveImg(nImgList, index);
}

let toLogin = document.getElementById("toLogin");

toLogin.onclick = () => {
    window.location.href = "https://www.apifox.cn/web/user/login";
}

let toMore = document.getElementById("toMore");

toMore.onclick = () => {
    window.location.href = 'https://www.apifox.cn/apihub';
}
 // 全屏
let fullScreen = document.getElementById("full-img");

fullScreen.onclick = () => {
    nImgList[num].getElementsByTagName('img')[0].requestFullscreen();
}

// 下拉菜单
let clickMenu = document.getElementById("clickMenu");
let dropMenu = document.getElementById("dropMenu");

clickMenu.onmouseover = () => {
    spread();
    let menuList = dropMenu.getElementsByTagName('li');
    for (let i = 0; i < menuList.length; i++) {
        menuList[i].onmouseover = () => {
            menuList[i].style.backgroundColor = "rgb(245,245,245)";
        }
        menuList[i].onmouseout = () => {
            menuList[i].style.backgroundColor = "white";
        }
    }
    let isOn = false;
    dropMenu.onmouseover = () => {
        isOn = true;
        spread();
    }

    dropMenu.onmouseout = () => {
        isOn = true;
        shrink();
    }

    clickMenu.onmouseleave = () => {
        setTimeout(() => {
            if (!isOn) {
                shrink();
            } else {
                spread();
            }
        }, 500);
    }
}
// 展开菜单
function spread() {
    // dropMenu.style.display = "flex";
    dropMenu.style.opacity = "1"
    // dropMenu.style.maxHeight = '300px';
}
// 收缩菜单
function shrink() {
    // dropMenu.style.display = "none";
    dropMenu.style.opacity = "0"
    // dropMenu.style.maxHeight = '150px';
}