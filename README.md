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
1. Откройте Hamster Kombat в Telegram Web и откройте DevTools (`CTRL+C`), также известный как `Просмотреть код`.  
2. Скопируйте [скрипт кликера](/devtools_console/autoclicker.js).
3. В DevTools перейдите во вкладку `Консоль` (`Console`) и вставьте скопированный скрипт туда и нажмите `Enter`.

> [!TIP]
> Частоту клика можно регулировать переменной `click_interval` в файле.

## Контакты
Телеграмм канал разработчик: [@crippti](https://t.me/crippti).
