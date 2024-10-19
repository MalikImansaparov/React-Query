const axios = require('axios').default;

// export const getAllBooks = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
// console.log(response)
//   if (!response.ok) {
//     throw new Error("Something went wrong.");
//   }
//
//   return await response.json()
// };

export const getBook = async ({ queryKey }) => {

  const [_key, { id }] = queryKey;
  const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/books/${id}`, id);
  if (!response.ok) {
    throw new Error(response.message);
  }
  return await response.json()
};

export const updateBook = async ({ id, ...data }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(response.message);
  }

  return response.json();
};

export const createBook = async ({ ...data }) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_SERVER}/books/`,
    {
      data: 'books',
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};


export const removeBook = async (id) => {
  const response = await axios.delete(
    `${process.env.REACT_APP_API_SERVER}/books/${id}`, {
      data: 'books'
      }
  );

  if (!response.ok) {
    throw new Error(response.message);
  }

  return true;
};

export const getAllBooks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/books`);

    if (!response.ok) {
        throw new Error("Something went wrong.");
    }
    return response.json();
};

export const getBook = async ({ queryKey }) => {
    const [_key, { id }] = queryKey;
    const response = await axios.get(`${process.env.REACT_APP_API_SERVER}/books/${id}`);

    if (!response.ok) {
        throw new Error(response.message);
    }

    return response.json();
};

export const updateBook = async ({ id, ...data }) => {
    const payload = {
        data: data
    }
    try{
        const response = await axios.put(
            `${process.env.REACT_APP_API_SERVER}/books/${id}`,
            {
                payload,
                headers: {
                    "Content-Type": "application/json",
                },
                body: data,
            }
        );
    }
     catch(response){
         if (!response.ok) {
             throw new Error(response.message);
         }
         return response
     }
};

export const createBook = async ({ ...data }) => {
    try{
        const response = await axios.post(
            `${process.env.REACT_APP_API_SERVER}/books/`,
            {
                data: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (e) {
        if (!e.response.ok) {
            throw new Error(e.response.message);
        }
        return e.response;
    }
};


export const removeBook = async (id) => {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_SERVER}/books/${id}`,
        );
    } catch (response) {
        if (!response.ok) {
            throw new Error(response.message);
        }
    }


    return true;
};
