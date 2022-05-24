// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB59CdK8atY-fbJhUgR9cHu9Iz2d8zuFkk',
    authDomain: 'native-tools.firebaseapp.com',
    projectId: 'native-tools',
    storageBucket: 'native-tools.appspot.com',
    messagingSenderId: '837039143147',
    appId: '1:837039143147:web:be1481c031d88ec31526ae',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;