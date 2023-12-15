rsp = {
    "code": 0,
    "data": {
        "version": "1",
        "imgCompression": {
            "png": "avif",
            "jpg": "avif",
            "gif": "webp"
        },
        "targets": [
            {
                "targetName": "JDMainPageViewController",
                "blankRateAfterLoad": 55,
                "targetLayoutInfo": {
                    "paddingTop": "0",
                    "paddingBottom": "50pt"
                },
                "targetId": 34,
                "desc": "首页",
                "targetType": 1,
                "layers": []
            },
            {
                "targetName": "JDTabBarController",
                "targetId": 57,
                "desc": "tabbar",
                "targetType": 1,
                "layers": []
            },

        ]
    }
}

$done({body: JSON.stringify(rsp)})