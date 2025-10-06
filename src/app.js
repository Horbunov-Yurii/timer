// Завдання 1

// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.

import { alert, error, defaultModules } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";

import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

defaultModules.set(PNotifyMobile, {});

let time = 60;
let instance = null;

const id = setInterval(() => {
  time -= 1;
  console.log("Виклик функції" + " " + time);
  if (time === 30) {
    alert({ text: "Час вийде через 30 секунд", delay: 1000 });
  } else if (time === 15) {
    instance = basicLightbox.create(`
    <div class="modal">
            <div class="modal">
        <div class="knopka">
          <button type="button" class="modal-button" data-modal-close>
            <svg class="modal-picture">
              <use href="./symbol-defs.svg#icon-close-black-18dp-2-1"></use>
            </svg>
          </button>
        </div>
        <h2 class="modal-title">Залиште свої дані, ми вам передзвонимо</h2>

        <div class="modal-list-container">
          <form>
            <ul class="modal-list">
              <li class="modal-item">
                <h2 class="modal-subtitle">Ім'я</h2>
                <div class="modal-korobka">
                  <svg class="modal-picture">
                    <use
                      href="./symbol-defs.svg#icon-person-black-18dp-1"
                    ></use>
                  </svg>
                  <input type="text" id="name" class="modal-table-text" />
                </div>
              </li>
              <li class="modal-item">
                <h2 class="modal-subtitle">Телефон</h2>
                <div class="modal-korobka">
                  <svg class="modal-picture">
                    <use href="./symbol-defs.svg#icon-phone-black-18dp-1"></use>
                  </svg>
                  <input type="text" id="tel" class="modal-table-text" />
                </div>
              </li>
              <li class="modal-item">
                <h2 class="modal-subtitle">Пошта</h2>
                <div class="modal-korobka">
                  <svg class="modal-picture">
                    <use href="./symbol-defs.svg#icon-email-black-18dp-1"></use>
                  </svg>
                  <input type="text" id="email" class="modal-table-text" />
                </div>
              </li>
              <li class="modal-item">
                <h2 class="modal-subtitle">Коментар</h2>
                <div class="modal-coment-korobka">
                  <label class="modal-coment">
                    <textarea
                      placeholder="Введіть текст"
                      class="modal-coment-text"
                    ></textarea>
                  </label>
                </div>
              </li>
            </ul>
            <div class="coordination">
              <input type="checkbox" class="select" />
              <p class="coordination-text">Погоджуюся з розсилкою та приймаю</p>
              <a href="./coordination.html" class="coordination-href">
                Умови договору</a
              >
            </div>
            <div class="button-container">
              <button type="submit" class="modal-button-submit">
                Відправити
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
`);

    instance.show();
    console.log("Виклик функції" + " " + time);
  } else if (time === 0) {
    instance.close();
    clearInterval(id);
  }
}, 500);
