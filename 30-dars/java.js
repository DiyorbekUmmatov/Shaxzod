(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.YC_I18N = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
    return {
    "error-page": {
        "button-cancel": "Отмена",
        "button-change-login": "Войти в другой аккаунт",
        "button-cookies-not-available": "Открыть форму",
        "button-login": "Войти",
        "button-login-sso": "Войти через SSO",
        "button-request-storage-access": "Разрешить доступ",
        "description-403": "Чтобы получить доступ, обратитесь к автору формы.",
        "description-403-role-error-b2b": "Форма создана в Yandex Forms для бизнеса и доступна только некоторым сотрудникам организации.",
        "description-403-role-error-int": "Форма доступна только некоторым сотрудникам.",
        "description-404": "Возможно, форма удалена либо ссылка на форму содержит ошибку.",
        "description-404-file": "Возможно, файл удален, у вас нет к нему доступа либо ссылка содержит ошибку.",
        "description-422": "Автор формы закончил приём ответов и закрыл форму.",
        "description-500": "Не удалось загрузить данные. Попробуйте ещё раз через некоторое время.",
        "description-already-answered": "Отправить ответ на эту форму можно только один раз.",
        "description-cookies-not-available": "Откройте форму в новой вкладке",
        "description-for-employees-only": "Войдите в аккаунт сотрудника организации.",
        "description-need-login": "Эта форма доступна только авторизованным пользователям.",
        "description-request-storage-access": "Форма доступна только авторизованным пользователям. Чтобы авторизация проходила корректно, предоставьте доступ к кукам (cookies).",
        "description-unknown-domain": "Обратитесь в поддержку, чтобы добавить домен в список разрешенных.",
        "placeholder-federation-id": "ID федерации",
        "title-403": "Доступ ограничен",
        "title-404": "Форма не найдена",
        "title-404-file": "Файл не найден",
        "title-422": "Форма закрыта",
        "title-500": "Что-то пошло не так",
        "title-already-answered": "Вы уже заполнили эту форму",
        "title-cookies-not-available": "Не удается получить доступ к данным аккаунта",
        "title-for-employees-only": "Форма доступна только сотрудникам",
        "title-need-login": "Войдите в аккаунт",
        "title-only-in-iframe": "Форму доступна только в iframe",
        "title-request-storage-access": "Нет доступа к данным авторизации",
        "title-unknown-domain": "Домен не поддерживается"
    },
    "footer": {
        "copyright": "Яндекс",
        "created-by-user-with": "Создано пользователем с помощью",
        "created-with": "Создано с помощью",
        "link-complain": "Пожаловаться",
        "link-confidential": "Конфиденциальность",
        "link-feedback": "Обратная связь"
    },
    "header": {
        "login": "Войти"
    },
    "success-page": {
        "answers-count": [
            "{{count}} ответ",
            "{{count}} ответа",
            "{{count}} ответов",
            "Нет ответов",
            "",
            ""
        ],
        "auto-redirect-warning": "Через {{timeout}} секунд вы будете перенаправлены по ссылке {{url}}.",
        "button-payment": "Перейти к оплате",
        "correct-answer": "Правильный: {{value}}",
        "create-form": "Создать форму",
        "data-send": "Переданы данные",
        "emails-sent": [
            "Отправлено письмо",
            "Отправлены письма",
            "Отправлены письма",
            "Отправлены письма",
            "",
            ""
        ],
        "fill-form-again": "Заполнить форму ещё раз",
        "fill-quiz-again": "Пройти тест ещё раз",
        "integrations-errors": [
            "Произошла {{failedCount}} ошибка",
            "Произошло {{failedCount}} ошибки",
            "Произошло {{failedCount}} ошибок",
            "Произошло {{failedCount}} ошибок",
            "",
            ""
        ],
        "pages-updated": [
            "Обновлена {{pagesCount}} страница",
            "Обновлено {{pagesCount}} страницы",
            "Обновлено {{pagesCount}} страниц",
            "Обновлено {{pagesCount}} страниц",
            "Обновлено {{pagesCount}} страницы",
            ""
        ],
        "promo-description": "Например, заявку на конференцию. Ответы придут вам на почту или в Трекер.",
        "promo-title": "Создайте форму за пару минут",
        "redirect-warning": "Нажав кнопку «{{redirectButtonText}}», вы покинете Yandex Forms и перейдёте по ссылке {{url}}. Сервис Yandex Forms не несет ответственности за содержимое сайта {{url}}.",
        "results-score": [
            "{{count}} балл",
            "{{count}} балла",
            "{{count}} баллов",
            "{{count}} баллов",
            "",
            ""
        ],
        "results-title": "Правильные ответы",
        "scores": [
            "{{scores}} балл из {{totalScores}}",
            "{{scores}} балла из {{totalScores}}",
            "{{scores}} баллов из {{totalScores}}",
            "{{scores}} баллов из {{totalScores}}",
            "",
            ""
        ],
        "share-form": "Поделиться формой",
        "share-results": "Поделиться результатами",
        "share-stats": "Поделиться статистикой",
        "sr-answer-correct": "Верно",
        "sr-answer-incorrect": "Неверно",
        "sr-loading": "Выполняется",
        "stats-title": "Ответы участников",
        "tasks-created": [
            "Создана {{tasksCount}} задача",
            "Создано {{tasksCount}} задачи",
            "Создано {{tasksCount}} задач",
            "Создано {{tasksCount}} задач",
            "",
            ""
        ],
        "title-api": "API",
        "title-email": "Почта",
        "title-function": "Cloud Functions",
        "title-integration": "События после отправки формы",
        "title-tracker": "Трекер",
        "title-wiki": "Вики"
    },
    "survey-page": {
        "add-series": "Ещё",
        "any-error": "Не все поля заполнены верно.",
        "captcha-label": "Введите число с картинки",
        "currency": "₽",
        "date-placeholder": "ДД.ММ.ГГГГ",
        "delete-selected-btn": "Удалить",
        "delete-series-btn": "Удалить серию",
        "error-delete-file": "Не удалось удалить файл.",
        "error-file-upload": "Не удалось загрузить файлы.",
        "error-load-data": "Не удалось загрузить данные.",
        "file-limit-hint": [
            "{{maxCount}} файл до {{maxSize}} МБ. ",
            "До {{maxCount}} файлов, допустимый размер одного файла —  {{maxSize}} МБ. ",
            "До {{maxCount}} файлов, допустимый размер одного файла —  {{maxSize}} МБ. ",
            "До {{maxCount}} файлов, допустимый размер одного файла —  {{maxSize}} МБ. ",
            "До {{maxCount}} файлов, допустимый размер одного файла —  {{maxSize}} МБ. ",
            "До {{maxCount}} файлов, допустимый размер одного файла —  {{maxSize}} МБ. "
        ],
        "file-upload-title": "Выберите файлы или перетащите их сюда",
        "payment-hint": "Перенаправим вас на сайт ЮMoney для завершения платежа.",
        "range-date-from": "c",
        "range-date-to": "по",
        "required-sr-only": "Обязательное поле",
        "series-name": "Серия",
        "sr-currency": "Валюта: Рубли",
        "sr-default-option": "Не выбрано",
        "sr-error-label": "Ошибка",
        "sr-status-add-series": "Серия добавлена",
        "sr-status-delete-series": "Серия удалена",
        "submit-error": "Что-то пошло не так. Пожалуйста, повторите запрос позже.",
        "upload-text": "Загрузить",
        "validation-date": "Укажите корректную дату.",
        "validation-decimal": "Введите корректное число.",
        "validation-email": "Введите корректный адрес электронной почты.",
        "validation-inn": "Введите корректный ИНН.",
        "validation-max-count-files": "Превышено максимальное допустимое количество файлов.",
        "validation-max-date": "Выбранная дата должна быть не позднее {{date}}.",
        "validation-max-number": "Убедитесь, что это значение меньше либо равно {{max}}.",
        "validation-max-size-files": "Размер файла превышает {{maxSize}} МБ.",
        "validation-max-string": "Ответ должен содержать менее {{max}} символов.",
        "validation-min-date": "Выбранная дата должна быть не раньше {{date}}.",
        "validation-min-number": "Убедитесь, что значение больше либо равно {{min}}.",
        "validation-min-string": "Ответ должен содержать более {{min}} символов.",
        "validation-phone": "Введите корректный номер телефона.",
        "validation-regexp": "Данные не соответствуют формату.",
        "validation-required": "Это поле обязательно",
        "validation-russian": "Введите символы русского алфавита.",
        "validation-url": "Введите корректный URL."
    }
};
}));