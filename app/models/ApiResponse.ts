interface ApiResponse<T> {
    errors: ApiError[];
    response: T[];
}