<div align="center">
<img src="./assets/hamster.png" width="300em"></img>

<h1>Hamster Kombat</h1>

<p align="center">Репозиторий посвященный абузу игры Hamster Kombat.</p>

Присоединяйся на канал [@crippti](https://t.me/crippti).

</div>


## О проекте
Если вы обычный пользователь, то можете начинать читать с раздела [Запуск Hamster Kombat на ПК](#запуск-hamster-kombat-на-пк).

> [!NOTE]
> Ожидается, что вы используете браузер `Google Chrome`.

## Структура репозитория
- [`devtools_console`](devtools_console/) содержит скрипты, которые можно копировать и запускать в консоли devtools на вкладке с открытой Hamster Kombat.
- [`scripts`](scripts/) содержит скрипты, которые не должны запускаться вручную пользователем.

## Запуск Hamster Kombat на ПК
> **Если вы еще не запускали Hamster Kombat, то можете поддержать разработчика перейдя по [рефке](https://t.me/hamster_kOmbat_bot/start?startapp=kentId6545472905) в Hamster Kombat.**

Для запуска Hamster Kombat в Telegram Web нужно использовать расширение, которое подменяет оригинальные скрипты игры на наши.
1. Устанавливаем расширение [`ViolentMonkey`](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
2. Устанавливаем [`scripts/hamster-kombat-inject.user.js`](https://github.com/crippti/hamster-kombat/raw/master/scripts/hamster-kombat-inject.user.js) для ViolentMonkey (нажатие на ссылку начнет установку скрипта).

:white_check_mark: **Теперь Hamster Kombat запускается в Telgram Web.**

## Autoclicker
**Автокликер** - скрипт, который бесконечно кликает на хомячка, даже если вы сворачиваете окно.

### Запуск
1. Откройте Hamster Kombat в Telegram Web и откройте DevTools (`CTRL+SHIFT+I`), также известный как `Просмотреть код`.  
2. Скопируйте [скрипт кликера](/devtools_console/autoclicker.js).
3. В DevTools перейдите во вкладку `Консоль` (`Console`) и вставьте скопированный скрипт туда и нажмите `Enter`.
> [!NOTE]
> Вероятно вылезет сообщение на желтом фоне с текстом:
> ```
> Warning: Don’t paste code into the DevTools Console that you don’t understand or haven’t reviewed yourself. This could allow attackers to steal your identity or take control of your computer. Please type ‘allow pasting’ below and hit Enter to allow pasting.
> ```
> Это означает, что вы не можете вставлять текст в консоль. Чтобы вернуть себе эту возможность, напишите в консоль `allow pasting` и нажмите `Enter`.


> [!TIP]
> Частоту клика можно регулировать переменной `click_interval` в файле.

> [!WARNING]
> Если вкладка долго неактивна, то скрипт перестает выполняться.
> Сейчас эта проблема не решена, но вот возможное решение https://support.google.com/chrome/answer/12929150?hl=en#zippy=%2Cturn-memory-saver-on-or-off.

## Контакты
Телеграмм канал разработчика: [@crippti](https://t.me/crippti).  
Чат где можно задать вопрос: https://t.me/+p7qNwbQSnlJhNjE6
