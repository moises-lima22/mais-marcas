const createRestObject = (data) => {
  return {
    content: data,
    error: undefined,
    get hasError() {
      return false;
    },
  };
};

const createRestErrorObject = (error) => {
  return {
    content: undefined,
    error: {
      message: error.message,
      code: error.response ? error.response.status : undefined,
    },
    get hasError() {
      return true;
    },
  };
};

const createRestRequest = async (requestFunction) => {
  try {
    const response = await requestFunction;
    return createRestObject(response);
  } catch (error) {
    return createRestErrorObject(error);
  }
};

export { createRestObject, createRestErrorObject, createRestRequest };
