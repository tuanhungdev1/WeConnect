export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface MetaData {
  currentPage: number;
  totalPage: number;
  pageSize: number;
  totalCount: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
  token?: Token;
  errors?: string[];
  pagination?: MetaData;
}
