function readCSV(path, callback) {
    $.get(path, function (data){
        var result = "[";
        var raw = data.split('\n');
        var keys = raw[0].split(',');
        var values = [];
        for(var i = 1; i < raw.length; i++) {
            values[i - 1] = new Array();
            var end = -2;
            var x = 0;
            var a = [];
            var flag = [];
            if (raw[i].charAt(0) === '"') {
                end = raw[i].indexOf('",');
                if (end != -1) {
                    a.push(raw[i].slice(1, end));
                    flag.push(1);
                }
                else {
                    end = 0;
                    x = 2;
                }
            }
            var start = raw[i].indexOf(',"', end);
            if (start == -1) {
                a.push(raw[i].slice(end + 2 - x));
                flag.push(0);
            }
            else {
                if (end + 1 != start) {
                    a.push(raw[i].slice(end + 2 - x, start));
                    flag.push(0);
                }
            }
            for(var j = 0; start != -1; j++)
            {
                if(j != 0 && end + 1 != start) { 
                    //消除相邻项影响，添加中间字段至b
                    a.push(raw[i].slice(end + 2, start));
                    flag.push(0);
                }
                end = raw[i].indexOf('",', start);
                if(end == -1) {
                    //不对称：只有左引号，将尾添加至b
                    a.push(raw[i].slice(start + 2));
                    if(a[a.length - 1].charAt(a[a.length - 1].length - 1) === '"') {
                        a[a.length - 1] = a[a.length - 1].slice(0, a[a.length - 1].length - 1);
                        flag.push(1);
                    }
                    else {
                        flag.push(0);
                    }
                    break;
                }
                //获取引号之间的部分添加至a
                a.push(raw[i].slice(start + 2, end));
                flag.push(1);
                start = raw[i].indexOf(',"', end);
            }
            if (end != -1 && raw[i].slice(end + 2) != "") {
                a.push(raw[i].slice(end + 2));
                flag.push(0);
            }
            if (a.length == 2 && a[0] === a[1]) {
                a.pop();
                flag.pop();
            }
            for(var j = 0; j < a.length; j++) {
                if (flag[j] == 1) {
                    values[i - 1].push(a[j]);
                }
                else {
                    var b = a[j].split(',');
                    console.log(b.length);
                    for (var k = 0; k < b.length; k++) {
                        values[i - 1].push(b[k]);
                    }
                }
            }
        }
        for(var i = 0; i < values.length; i++) {
            if(i != 0) result += ",";
            result += "{";
            console.log(values[i]);
            for(var j = 0; j < keys.length; j++) {
                if(j != 0) result += ",";
                result += 
                `
                    "${keys[j]}":"${values[i][j]}"
                `;
            }
            result += "}";
        }
        result += "]";
        callback(eval(result));
    })
}