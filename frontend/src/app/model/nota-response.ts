export interface NotaResponse<T> {
    success: boolean;
    message: string;
    data: T;
  }