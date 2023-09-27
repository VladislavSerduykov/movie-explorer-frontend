class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  async getMovies() {
    const url = `${this._baseUrl}/beatfilm-movies`;
    const res = await fetch(url);

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }
}

const moviesApi = new MoviesApi({ baseUrl: "https://api.nomoreparties.co/" });

export default moviesApi;
