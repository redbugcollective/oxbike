import { KeyPair } from 'shirokuma';

const LOCAL_STORAGE_KEY = 'privateKey';

export function getKeyPair(): KeyPair {
  const privateKey = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (privateKey) {
    return new KeyPair(privateKey);
  }

  const keyPair = new KeyPair();
  window.localStorage.setItem(LOCAL_STORAGE_KEY, keyPair.privateKey());
  return keyPair;
}
