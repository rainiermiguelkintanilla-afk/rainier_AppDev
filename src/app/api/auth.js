// Android emulator cannot reach 127.0.0.1 on your host; use 10.0.2.2 instead.
const BASE_URL = 'http://10.0.2.2:8000/api';
const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export async function authLogin({ email, password }) {
  // Hit Symfony's JSON API login endpoint.
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    ...options,
    // Send both `email` and `username` so it matches
    // common Symfony ApiLoginController setups.
    body: JSON.stringify({
      email,
      username: email,
      password,
    }),
  });
  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Login failed');
  }
}
export async function authRegister(payload) {
  const response = await fetch(BASE_URL + '/register', {
    method: 'POST',
    ...options,
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Registration failed');
  }
}