import Router from 'next/router';
import Cookie from 'js-cookie';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const adminLogin = (identifier, password) => {
  //prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier, password })
      .then((res) => {
        if (res.data.user.role.name === 'Admin') {
          //set token response from Strapi for server validation
          Cookie.set('adminToken', res.data.jwt, { expires: 7, path: '/' });

          //resolve the promise to set loading to false in SignUp form
          resolve(res);
          //redirect back to home page for restaurance selection
          Router.push('/admin/dashboard');
        }
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

export const adminLogout = () => {
  //remove token and user cookie
  Cookie.remove('adminToken');
  delete window.__user;
  // sync logout between multiple windows
  window.localStorage.setItem('logout', Date.now());
  //redirect to the home page
  Router.push('/admin');
};
