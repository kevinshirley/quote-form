import reactHotToast, { Toaster } from 'react-hot-toast';
import { isNil } from 'lodash';

export enum APPEARANCE {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
}

interface ToastType {
  appearance: 'success' | 'error' | 'warning' | 'info';
  message: string;
  callback?: any;
  callbackParam?: any;
}

const Toast = (options: ToastType): void => {
  if (options.appearance === APPEARANCE.SUCCESS) {
    reactHotToast.success(options.message);

    if (!isNil(options.callback) && !isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000, options.callbackParam);
    } else if (!isNil(options.callback) && isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000);
    }
  } else if (options.appearance === APPEARANCE.ERROR) {
    reactHotToast.error(options.message);

    if (!isNil(options.callback) && !isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000, options.callbackParam);
    } else if (!isNil(options.callback) && isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000);
    }
  } else if (options.appearance === APPEARANCE.WARNING) {
    reactHotToast(options.message, {
      icon: '⚠️',
    });

    if (!isNil(options.callback) && !isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000, options.callbackParam);
    } else if (!isNil(options.callback) && isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000);
    }
  } else if (options.appearance === APPEARANCE.INFO) {
    reactHotToast(options.message, {
      icon: 'ℹ️',
    });

    if (!isNil(options.callback) && !isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000, options.callbackParam);
    } else if (!isNil(options.callback) && isNil(options.callbackParam)) {
      setTimeout(options.callback, 3000);
    }
  } else {
    console.error('[Error] This Toast appearance does not exist');
  }
};


export { Toaster };
export default Toast;
