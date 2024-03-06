//根据info.json填写成员列表
$.getJSON("../members/info.json", function(data){
    var addCardHtml = "";
    if (data.length < 1) {
        alert("Error! Please contact us. ");
    }
    else {
        for(var i = 0; i < data.length ; ++i) {
            addCardHtml += "<li><div class=\"card\"><div style=\"background-image: url('" + data[i].bg + "');\"></div><a href=\"https://space.bilibili.com/" + data[i].uid + "\" target=\"_blank\"><img src=\"" + data[i].image + "\"></a><h2>" + data[i].name + "</h2><p>" + data[i].desc + "</p></div></li>";
        }
        document.getElementById("container").innerHTML = addCardHtml;
        //alert("ok");
    }
})