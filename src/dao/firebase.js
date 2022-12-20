// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase } from 'firebase/database'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1li_VZp0mBaKy03RB-AuNNnEJXSN89qI",
  authDomain: "fapesjr2022.firebaseapp.com",
  projectId: "fapesjr2022",
  storageBucket: "fapesjr2022.appspot.com",
  messagingSenderId: "172722050915",
  appId: "1:172722050915:web:2cf8b94be12ff6b9352556",
  measurementId: "G-G29VPN6T11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbFire = getFirestore(app);
const auth = getAuth(app);
const navigate = useNavigate();
export { db, auth, dbFire }


export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    if (!err){
      navigate("/TelaPrincipalProfessor");
    }
    
  } catch (err) {
    console.log(err.message);
    if(err.message === 'Firebase: Error (auth/user-not-found).'){
      alert('O seu usuario não foi cadastrado! \n Porfavor cadastre-se');
      navigate("/")

    }else if (err.message === 'Firebase: Error (auth/wrong-password).'){
      alert('Senha ou usuário incorreto');
      navigate("/")
    }
  }
};

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(dbFire, "professor"), {
      uid: user.uid,
      name,
      email,
    });
    
  } catch (err) {
    console.log(err.message);
    if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
      //alert('Sua senha tem que ter no minino 6 caracteres');
      throw 'Sua senha tem que ter no minino 6 caracteres'

    }else if (err.message === 'Firebase: Error (auth/email-already-in-use).'){
      throw 'O e-mail escolido já esta sendo utilizado!'

    }else{
      throw 'Ocorreu um erro, por favor tente novamente!'

    }
  }
};

export const registerProva = async ({dado,uidUser}) => {
  try {
    console.log({uidUser})
    await addDoc(collection(dbFire, "professor/"+uidUser+"/provas/"), dado);
    
  } catch (err) {
    console.log(err.message);
    if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
      //alert('Sua senha tem que ter no minino 6 caracteres');
      throw 'Sua senha tem que ter no minino 6 caracteres'

    }else if (err.message === 'Firebase: Error (auth/email-already-in-use).'){
      throw 'O e-mail escolido já esta sendo utilizado!'

    }else{
      throw 'Ocorreu um erro, por favor tente novamente!'

    }
  }
}

export const registerResultadosAlunos = async ({dado,uidUser,idProva}) => {
  try {
    console.log({uidUser,idProva})
    await addDoc(collection(dbFire, "professor/"+uidUser+"/provas/"+idProva+"/respostasAlunos/"), dado);

    console.log('prova registrada')
    
  } catch (err) {
    console.log(err.message);
    if(err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
      //alert('Sua senha tem que ter no minino 6 caracteres');
      throw 'Sua senha tem que ter no minino 6 caracteres'

    }else if (err.message === 'Firebase: Error (auth/email-already-in-use).'){
      throw 'O e-mail escolido já esta sendo utilizado!'

    }else{
      throw 'Ocorreu um erro, por favor tente novamente!'

    }
  }
}

export const logout = () => {
  signOut(auth);  
};