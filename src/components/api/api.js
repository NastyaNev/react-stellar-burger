import { SET_USER } from "../../services/actions/user";

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

export function setUser(email, password) {
    return fetch(`${config.url}/auth/login`, {
        headers: config.headers,
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(checkResponse)
}

function refreshToken() {
    return fetch(`${config.url}/auth/token`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken")
      })
    }).then(checkResponse);
  };

  const fetchWithRefresh = async (url, options) => {
    try {
      const res = await fetch(url, options);
      return await checkResponse(res);
    } catch (err) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken();
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("accessToken", refreshData.accessToken);
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options);
        return await checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  };

  export const getUser = () => {
    return (dispatch) => {
        return fetchWithRefresh(`${config.url}/auth/user`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("accessToken")
            }
        }).then((res) => {
            if (res.success) {
                dispatch({type: SET_USER, user: res.user});
            } else {
                return Promise.reject("Ошибка данных с сервера");
            }
        });
    };
};
