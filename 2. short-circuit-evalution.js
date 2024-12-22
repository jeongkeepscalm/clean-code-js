function badFetchData() {
  if (state.data) {
    return state.data;
  } else {
    return 'Fetching...';
  }
}

function goodFetchData() {
  return state.data || 'Fetching...';
}

// ------------------------------------

function badFavoriteDog(someDog) {
  let favoriteDog;
  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = '냐옹';
  }
  return favoriteDog;
}

// someDog 가 falsy 일 경우 냐옹을 반환
function goodFavoriteDog(someDog) {
  return (someDog || '냐옹') + '입니다.';
}

// ------------------------------------

function badGetActiveUserName(user, isLogin) {
  if (isLogin && user) {
    if (user.name) {
      return user.name;
    } else {
      return 'Guest';
    }
  }
}

function goodGetActiveUserName(user, isLogin) {
  if (isLogin && user) {
    return user.name || 'Guest';
  }
}