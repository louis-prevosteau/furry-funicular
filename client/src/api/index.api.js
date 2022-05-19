import { API_URL } from '../config';
import axios from 'axios';

export default class RootApi {
   route;

  constructor(route) {
    this.route = route;
  }

  api = (headers = {}) => {
    const token = localStorage.getItem('token');

    return axios.create({
      baseURL: `${API_URL}${this.route}`,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    });
  };

  //   catchError = (error: unknown, printError: boolean = true): ErrorService => {
  //     let err: ErrorService | null = null;

  //     console.error(error);

  //     if (axios.isAxiosError(error)) {
  //       if (error.response!.status === 400) {
  //         throw { errorType: "wrong-password"};

  //       }
  //       if (error.response) {
  //         err = new ErrorService(
  //           error.response!.status,
  //           (error.response!.data as any).message,
  //           (error.response!.data as any).data,
  //         );
  //       } else if (error.request) {
  //         err = new ErrorService(
  //           500,
  //           'Veuillez vérifier votre connexion internet svp',
  //         );
  //       }
  //     }

  // //     if (!err) {
  // //       err = new ErrorService(500);
  // //     }

  // //     if (printError ?? false) err.printError();

  // //     return err;
  // //   };
}

export const catchError = (code) => {
  switch (code) {
    case 401:
      break;

    default:
      break;
  }
};
