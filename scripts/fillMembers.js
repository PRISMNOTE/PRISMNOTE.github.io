var presentCard = "";
var pastCard = "";
readCSV("info.csv", function (data){
    if (data.length < 1) {
        alert("Error! Please contact us. ");
    }
    else {
        for(var i = 0; i < data.length ; ++i) {
            if (data[i].bg == "@#") {
                pastCard +=
                `
                <li>
                    <div class="card">
                        <div></div>
                        <a href="https://space.bilibili.com/${data[i].uid}" target="_blank">
                            <img src="${data[i].image}">
                        </a>
                        <h2>${data[i].name}</h2>
                        <pre>${data[i].desc}</pre>
                    </div>
                </li>
                `;
            }
            else {
                presentCard +=
                `
                <li>
                    <div class="card">
                        <div style="background-image: url('${data[i].bg}');"></div>
                        <a href="https://space.bilibili.com/${data[i].uid}" target="_blank">
                            <img src="${data[i].image}">
                        </a>
                        <h2>${data[i].name}</h2>
                        <pre>${data[i].desc}</pre>
                    </div>
                </li>
                `;
            }
            
        }
        document.getElementById("present").innerHTML = presentCard;
        if (pastCard != "") {
            document.getElementById("h2").innerHTML = " 已退出成员";
            document.getElementById("past").innerHTML = pastCard;
        }
    }
});

/*
//根据info.json填写成员列表
$.getJSON("info.json", function(data){
    var addCardHtml = "";
    if (data.length < 1) {
        alert("Error! Please contact us. ");
    }
    else {
        for(var i = 0; i < data.length ; ++i) {
            addCardHtml +=
            `
            <li>
                <div class="card">
                    <div style="background-image: url('${data[i].bg}');"></div>
                    <a href="https://space.bilibili.com/${data[i].uid}" target="_blank">
                        <img src="${data[i].image}">
                    </a>
                    <h2>${data[i].name}</h2>
                    <pre>${data[i].desc}</pre>
                </div>
            </li>
            `;
        }
        document.getElementById("container").innerHTML = addCardHtml;
    }
})
*/