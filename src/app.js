// Завдання 1

// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

import { alert,error, defaultModules } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";


defaultModules.set(PNotifyMobile, {});


let time = 60;

const id = setInterval(() => {
    time -= 1;
    console.log("Виклик функції" + " " + time);
    if (time === 30) {
alert({text: 'Час вийде через 30 секунд', delay: 1000});
    } else if (time === 0) {
        alert("Час вийшов");
        console.log("Виклик функції" + " " + time);
        clearInterval(id);
    }
}, 1000);