export default class ArraySchema {
  constructor(validators = [(e) => Array.isArray(e)]) {
    this.validators = validators;
  }

  isValid(e) {
    return this.validators.every((validator) => validator(e));
  }

  length(length) {
    const lengthValidator = (e) => e.length === length;
    return new ArraySchema([...this.validators, lengthValidator]);
  }
}
