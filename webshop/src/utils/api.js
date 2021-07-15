/* Frontend code from src/utils/api.js */
/* Api methods to call /functions */

const create = async (data) => {
    const res = await fetch('/.netlify/functions/products-create', {
      body: JSON.stringify(data),
      method: 'POST'
    })
    return await res.json();
  }
  
  const readAll = async () => {
    const res = await fetch('/.netlify/functions/products-read-all')
    return await res.json()
  }

  const read = async id => {
      const res = await fetch(`/.netlify/functions/products-read/${id}`); 
      return await res.json();
  }

  const api = {
    create: create,
    readAll: readAll,
    read
  }

export default api;