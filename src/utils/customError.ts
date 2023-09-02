class CustomAPIError extends Error {
    constructor(public message: string, public statusCode: number) {
      super(message);
      this.statusCode = statusCode;
    }
}
  
const createCustomError = (msg: string, statusCode: number) => new CustomAPIError(msg, statusCode);
  
export { createCustomError, CustomAPIError };