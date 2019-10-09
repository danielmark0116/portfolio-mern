import Cookie from 'js-cookie';

export const fetchToken = () => {
  return Cookie.get('googleAuthToken');
};

export const getAuthHeaders = () => {
  return { headers: { Authorization: `Bearer ${fetchToken()}` } };
};
