export function success(data, message = 'Success') {
    return {
      status: 'success',
      message,
      data
    };
  }
  
  export function error(message = 'Something went wrong', statusCode = 500) {
    return {
      status: 'error',
      message,
      code: statusCode
    };
  }
  