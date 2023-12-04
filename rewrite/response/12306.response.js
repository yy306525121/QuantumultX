var obj = JSON.parse($request.body)
rsp = {};
if (obj.placementNo === 'G0054') {
    rsp = {
        "code": "00",
        "materialsList": [],
        "rid": "93f69e42bdea4369a5d4100533b8bba9",
        "advertParam": {
            "skipTime": 1,
            "showSkipBtn": 0,
            "skipTimeAgain": 0,
            "chacheTime": 600000,
            "fixedscreen": 3,
            "isDefault": 0,
            "displayNumDi": 1,
            "index": 1
        }
    }
} else {
    rsp = {
        "code": "00",
        "message": "无广告返回"
    }
}

$done({body: JSON.stringify(rsp)})