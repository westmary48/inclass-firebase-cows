import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const pastureDiv = $('#pasture');
const logoutButton = $('#navbar-logout-button');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      authDiv.addClass('hide');
      pastureDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      // person is NOT logged in
      authDiv.removeClass('hide');
      pastureDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
