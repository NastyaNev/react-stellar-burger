export function getArray() {
    return fetch('https://norma.nomoreparties.space/api/ingredients ', {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        });
}