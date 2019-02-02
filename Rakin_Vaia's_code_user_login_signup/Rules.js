// Custom default rules to validate form fields
const defaultRules = {
  numbers: /^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/,
  email: /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
  // password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]$/,
  required: /\S+/,
  minlength(length, value) {
    if (length === undefined) {
      throw 'ERROR: It is not a valid length, checkout your minlength settings.';
    } else if (value.length >= length) {
      return true;
    }
    return false;
  },
  maxlength(length, value) {
    if (length === undefined) {
      throw 'ERROR: It is not a valid length, checkout your maxlength settings.';
    } else if (value.length > length) {
      return false;
    }
    return true;
  },
};

export default defaultRules;
