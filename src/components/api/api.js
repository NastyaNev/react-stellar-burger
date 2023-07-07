const config = {
    url: 'https://norma.nomoreparties.space/api/ingredients',
    headers: {
        'Content-Type': 'application/json'
    }
}

export function getArray() {
    return fetch(config.url, {
        heagers: config.headers
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        });
}