
const storedUser: any = localStorage.getItem('authenticatedUser');

const API_URL: any = process.env.REACT_APP_API_URL;

export const fetchApi = async (url: string, method: string, data?: any) => {

  const { username = 'admin', password = 'password123' } =
    typeof storedUser === 'string' ? JSON.parse(storedUser) : {};
  const uri: any = `${API_URL}/${url}`
  const response = await fetch(uri, {
    method,
    headers: {
      'Authorization': 'Basic ' + btoa(`${username}:${password}`),
      'Content-Type': 'application/json'
    },
    ...(data && { body: JSON.stringify(data) }),
  });

  if (!response.ok) {
    throw new Error('Failed to call the api');
  }
  return response.json();

};
