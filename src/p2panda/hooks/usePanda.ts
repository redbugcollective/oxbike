import { useContext } from 'react';
import { PandaContext } from '../contexts';

export function usePanda() {
  return useContext(PandaContext);
}
