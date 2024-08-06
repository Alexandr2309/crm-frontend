import { useContext } from 'react';
import { ToastContext, toastContext } from '../context/toastContext';

export const useToast = () => useContext(toastContext) as ToastContext;
