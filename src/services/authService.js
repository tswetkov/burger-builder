import { request } from './request';

// verifyPassword/signupNewUser
export const authService = {
  login(data) {
    return request.post(
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBaCpuaz4uIV_H3kNsxQYBJAzIfjXCiej4',
      data,
    );
  },
};
