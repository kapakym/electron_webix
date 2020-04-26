// Подключаем модуль электрона
const { remote } = require('electron')
// Получаем указатель на окно браузера где будет производиться отображение нашего интерфейса
let WIN = remote.getCurrentWindow()
// Подключаем фреймворк webix
const webix = require('./libs/webix.min.js')
//Подключаем фреймворк JQuery
$ = require('jquery')
// Функция в которую в качестве параметра как раз и будет передаваться наша с Вами верстка
webix.ui(
    {
        "id": 1587908357897,
        "rows": [
            {
                "css": "webix_dark",
                "view": "toolbar",
                "height": 0,
                "cols": [
                    { "view": "label", "label": "Elcetron +Webix its cool!", css:"head_win" },
                    { "label": "-", "view": "button", "height": 38, "width": 40, id:"min-bt" },
                    { "label": "+", "view": "button", "height": 38, "width": 40, id:"max-bt" },
                    { "label": "x", "view": "button", "height": 38, "width": 40, id:"close-bt" }
                ]
            },
            {
                "width": 0,
                "height": 0,
                "cols": [
                    { "url": "demo->5ea58f0e73f4cf00126e3769", "view": "sidebar", "width": 177 },
                    {
                        "width": 0,
                        "height": 0,
                        "rows": [
                            { "template": "Hello WORLD! ", "view": "template" },
                            {
                                "url": "demo->5ea58f0e73f4cf00126e376d",
                                "type": "bar",
                                "xAxis": "#value#",
                                "yAxis": {},
                                "view": "chart"
                            }
                        ]
                    }
                ]
            }
        ]
    }
)

// Закрытие окна
$$("close-bt").attachEvent("onItemClick", () => {
    const window = remote.getCurrentWindow();
    window.close();
})

// Свернуть окно
$$("min-bt").attachEvent("onItemClick", () => {
    const window = remote.getCurrentWindow();
    window.minimize();
})

// Распахнуть окно
$$("max-bt").attachEvent("onItemClick", () => {
    const window = remote.getCurrentWindow();
    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
})
