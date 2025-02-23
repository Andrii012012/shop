export const validateEmail = (value: string) => {
  if (!value) {
    return "Invalid email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    return "Invalid email address";
  }
};

export const validateEmptyField = (value: string) => {
  if (value.length) {
    return;
  } else {
    return "Invalid value";
  }
};

export const validatePhone = (value: string) => {
  if (value.length === 9) {
    return;
  } else {
    return "Invalid value";
  }
};
