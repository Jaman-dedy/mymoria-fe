const username = 'admin';
const password = 'password123';

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(`${username}:${password}`));

export const fetchApi = async (url:string, method:string, data?:any) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`),
      'Content-Type': 'application/json'
    },
    ...(data && { body: JSON.stringify(data) }), 
  });

  if (!response.ok) {
    throw new Error('Failed to call the pai');
  }

  return response.json();
};
