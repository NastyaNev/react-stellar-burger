const config = {
    url: 'https://norma.nomoreparties.space/api',
    headers: {
        'Content-Type': 'application/json'
    }
}

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export function getArray() {
    return fetch(`${config.url}/ingredients`, {
        heagers: config.headers
    })
        .then(checkResponse);
}

export function setOrder(ingredients) {
    return fetch(`${config.url}/orders`, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            ingredients
        })
    })
        .then(checkResponse)
}
