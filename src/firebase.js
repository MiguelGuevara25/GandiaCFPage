import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_qqsZ13bjinMXEo0lgFPMbfMmgzfj9tM",
  authDomain: "login-next-129aa.firebaseapp.com",
  projectId: "login-next-129aa",
  storageBucket: "login-next-129aa.appspot.com",
  messagingSenderId: "792176821335",
  appId: "1:792176821335:web:86a2ebb7ab00765d058f12",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
