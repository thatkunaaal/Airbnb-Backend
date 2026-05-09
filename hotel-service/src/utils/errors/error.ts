export class AppError extends Error {
    declare statusCode : number;
    declare explanation: string;
    constructor(statusCode : number, message : string){
        super(message);
        this.statusCode = statusCode;   
        this.explanation = message;
    }
}

