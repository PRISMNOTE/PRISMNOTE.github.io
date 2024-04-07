//TODO
function readCSV(path, callback) {
    $.get(path, function (data){
        var result = "[";
        var keys = data.split('\n')[0].split(',');
        var values = [];
        for(var i = 0; i < data.split('\n').length - 1; i++) {
            values[i] = data.split('\n')[i+1].split(','); 
        }
        for(var i = 0; i < values.length; i++) {
            if(i != 0) result += ",";
            result += "{";
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