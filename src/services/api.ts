import axios from 'axios';

// Axios, cliente HTTP basedo em Promise para fazer requisicoes
// tmb 'e possivel reproduzir com o fetch()
const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"  
});

export default api;