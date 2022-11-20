import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDrW8gcYZsmzLlAQCW0K85N53JunMV0FzI',
  authDomain: 'multimart-e67eb.firebaseapp.com',
  projectId: 'multimart-e67eb',
  storageBucket: 'multimart-e67eb.appspot.com',
  messagingSenderId: '216394300628',
  appId: '1:216394300628:web:117d4055a026a5a89a4f41'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;