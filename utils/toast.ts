import { toast, ToastPosition } from '@backpackapp-io/react-native-toast';


export const toastSuccess = (message: string, icon: any) => {
  toast.success(message, {
    position: ToastPosition.TOP,
    duration: 2000,
    icon,
  });
}

export const toastError = (message: string, icon: any) => {
  toast.error(message, {
    position: ToastPosition.BOTTOM,
    duration: 3000,
    icon,
  });
}


