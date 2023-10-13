export default class ObjectSchema {
  constructor(shape) {
    this.objectShape = shape;
  }

  // eslint-disable-next-line class-methods-use-this
  shape(shape) {
    return new ObjectSchema(shape);
  }

  isValid(object) {
    if (Object.keys(this.objectShape).length !== Object.keys(object).length) {
      return false;
    }
    return Object.keys(this.objectShape).every((key) => this.objectShape[key].isValid(object[key]));
  }
}
