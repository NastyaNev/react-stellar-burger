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
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        });
}

export function setOrder(ingredients) {
    return fetch(`${config.url}/orders`, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            "ingredients": ingredients
        })
    })
        .then(checkResponse)
}