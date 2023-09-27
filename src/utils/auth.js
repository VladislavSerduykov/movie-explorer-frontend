import baseUrl from './apiConfig'

class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getError(res) {
    return res.json().then((res) => {
      throw new Error(res.message);
    });
  }

  register(data) {
    const url = `${this._baseUrl}/signup`

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) return res.json();
      return this._getError(res);
    });
  }

  authorize(data) {
    const url = `${this._baseUrl}/signin`

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) return res.json();
      return this._getError(res);
    });
  }

  checkToken(token) {
    const url = `${this._baseUrl}/users/me`;
    return fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${token}`
      },
    })
      .then(res => {
        if (res.ok) return res.json();
        return this._getErrorFromServer(res);
      });
  }

}


const auth = new Auth(baseUrl);

export default auth;