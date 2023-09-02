import { CustomAPIError } from "./customError";

/**
 * 
 */
class BadRequest extends CustomAPIError {
    // readonly statusCode: number = 400;
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
    }
}

export default BadRequest;