import { HttpHeaders, HttpParams } from '@angular/common/http';

export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  data: T;
  message?: string;
}

export interface IApiResponsePaginated<T> {
  success: boolean;
  statusCode: number;
  data: T[];
  meta: {
    total: number;
    page?: number;
    limit: number;
  };
  message?: string;
}

export interface IApiError {
  statusCode: number;
  timestamp?: string;
  message: string;
  details?: string;
}

export interface IRequestConfig<TParams = any> {
  params?: HttpParams | TParams;
  headers?: HttpHeaders;
  body?: any;
  showSuccessAlert?: boolean;
  showErrorAlert?: boolean;
  cache?: boolean;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
