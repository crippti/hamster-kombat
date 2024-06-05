// ==UserScript==
// @name         Hamster Kombat
// @namespace    hamster-kombat-abuse
// @version      1.0
// @description  Hamster Kombat for Telegram Web
// @author       crippti
// @match        *://*.hamsterkombat.io/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/crippti/hamster-kombat/master/scripts/hamster-kombat-inject.user.js
// @updateURL    https://raw.githubusercontent.com/crippti/hamster-kombat/master/scripts/hamster-kombat-inject.user.js
// @homepage     https://github.com/crippti/hamster-kombat
// ==/UserScript==

(function() {
    'use strict';

    // Функция для замены URL скрипта
    function replaceScriptUrl() {
        // Список URL-адресов для замены
        const urlsToReplace = [
            'https://hamsterkombat.io/js/telegram-web-app.js',
            'https://app.hamsterkombat.io/js/telegram-web-app.js'
        ];
        const newUrl = 'https://cdn.jsdelivr.net/gh/crippti/hamster-kombat@master/scripts/telegram-web-app.js';

        // Получаем все теги <script> на странице
        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            // Проверяем, содержит ли src один из URL-адресов для замены
            if (urlsToReplace.includes(script.src)) {
                // Создаем новый тег <script> с новым URL
                const newScript = document.createElement('script');
                newScript.src = newUrl;
                newScript.type = 'text/javascript';

                // Заменяем старый тег на новый
                script.parentNode.replaceChild(newScript, script);
                console.log('Script URL replaced:', newScript.src);
            }
        }
    }

    // Наблюдатель за изменениями в DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                replaceScriptUrl();
            }
        });
    });

    // Настройки наблюдателя
    const config = {
        childList: true,
        subtree: true
    };

    // Начинаем наблюдение за изменениями в DOM
    observer.observe(document.body, config);

    // Первоначальный запуск замены URL
    replaceScriptUrl();
})();