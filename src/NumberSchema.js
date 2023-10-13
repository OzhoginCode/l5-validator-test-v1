export default class NumberSchema {
  constructor(validators) {
    this.validators = validators || [(e) => typeof (e) === 'number'];
  }

  isValid(e) {
    return this.validators.every((validator) => validator(e));
  }

  even() {
    const evenValidator = (e) => e % 2 === 0;
    return new NumberSchema([...this.validators, evenValidator]);
  }

  odd() {
    const oddValidator = (e) => e % 2 !== 0;
    return new NumberSchema([...this.validators, oddValidator]);
  }
}
