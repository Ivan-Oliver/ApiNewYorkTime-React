// Import the functions you need from the SDKs you need
import { getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE77E4g3DRsalK2DAv2vNOBP_GTyo_vmg",
  authDomain: "apinewyorktime-react.firebaseapp.com",
  projectId: "apinewyorktime-react",
  storageBucket: "apinewyorktime-react.appspot.com",
  messagingSenderId: "203885540883",
  appId: "1:203885540883:web:2a3022a9d8fb1f2f2c31e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);