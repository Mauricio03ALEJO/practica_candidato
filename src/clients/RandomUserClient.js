import axios from 'axios';

const consumirAPI = async () => {
    const respuesta = await axios.get('https://randomuser.me/api/');
    console.log(respuesta.data);
    return respuesta.data;
}

export async function consumirAPIFacade() {
    return await consumirAPI();
}