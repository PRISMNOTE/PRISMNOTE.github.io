function toTop(evt) {
    change_page(evt, "default_page");
    window.scrollTo(0, 0);
}

function change_page(evt, PageName) {
    console.log("Page Changed");
    console.log(PageName);
    var i, tabContent, tabLinks;

    // 隐藏所有页面内容
    tabContent = document.getElementsByClassName("main");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // 删除所有tab按钮的"active"类
    tabLinks = document.getElementsByClassName("button");
    for (i = 0; i < tabContent.length; i++) {
        tabLinks[i].className = "button";
    }

    // Show current tab page, and add "active" class for the button
    document.getElementById(PageName).style.display = "block";
    evt.currentTarget.className = "button active";
}