function badLoginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return '로그인 성공';
      }
    } else {
      throw new Error('No token');
    }
  }
}


function goodLoginService(isLogin, user) {

  if (isLogin) {
    return;
  }

  if (!checkToken()) {
    throw new Error('No token');
  }

  if (!user.nickName) {
    return registerUser(user);
  }
  
  refreshToken();
  return '로그인 성공';
}