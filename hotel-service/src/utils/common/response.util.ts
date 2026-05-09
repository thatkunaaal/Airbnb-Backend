
type SuccessSchema = {
    success : boolean,
    message : string | null,
    error : null,
    data : any
}

type ErrorSchema = {
    success : boolean,
    message : string | null,
    error : any,
    data : null
}

export const SuccessResponse : SuccessSchema = {
    success : true,
    message : "",
    error : null,
    data : {}
}

export const ErrorResponse : ErrorSchema = {
    success : false,
    message : "",
    error : {},
    data : null
}