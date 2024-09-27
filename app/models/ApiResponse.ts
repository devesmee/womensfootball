import { ApiError } from './ApiError';

export interface ApiResponse<T> {
  errors: ApiError[];
  response: T[];
}
