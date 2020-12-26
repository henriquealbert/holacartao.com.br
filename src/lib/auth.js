import Router from 'next/router';
import Cookie from 'js-cookie';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

//register a new user
export const registerUser = (username, email, password, occupation, terms) => {
  //prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return;
  }
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/register`, {
        username,
        email,
        password,
        occupation,
        terms
      })
      .then((res) => {
        //set token response from Strapi for server validation
        Cookie.set('token', res.data.jwt, { expires: 7, path: '/' });

        //resolve the promise to set loading to false in SignUp form
        resolve(res);
        if (Router.query.url) {
          Router.push({
            pathname: Router.query.url,
            query: Router.query
          });
        } else {
          Router.push('/minha-conta/');
        }
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

export const login = (identifier, password) => {
  //prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return;
  }

  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local/`, { identifier, password })
      .then((res) => {
        if (res.data.user.role.name === 'Authenticated') {
          //set token response from Strapi for server validation
          Cookie.set('token', res.data.jwt, { expires: 7, path: '/' });
          window.localStorage.removeItem('logout');
          //resolve the promise to set loading to false in SignUp form
          resolve(res);
          if (Router.query.url) {
            Router.push({
              pathname: Router.query.url,
              query: Router.query
            });
          } else {
            Router.push('/minha-conta/');
          }
        }
        if (res.data.user.role.name === 'Admin') {
          //set token response from Strapi for server validation
          Cookie.set('adminToken', res.data.jwt, { expires: 7, path: '/' });
          window.localStorage.removeItem('logout');
          //resolve the promise to set loading to false in SignUp form
          resolve(res);
          if (Router.query.url) {
            Router.push({
              pathname: Router.query.url,
              query: Router.query
            });
          } else {
            Router.push('/admin/');
          }
        }
      })
      .catch((error) => {
        //reject the promise and pass the error object back to the form
        reject(error);
      });
  });
};

export const logout = () => {
  //remove token and user cookie
  Cookie.remove('token');
  delete window.__user;
  // sync logout between multiple windows
  window.localStorage.setItem('logout', Date.now());
  //redirect to the home page
  Router.push('/login/?redirected=true');
};
