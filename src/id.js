import Identifier from './identifier';
import Namespace from './namespace';

class EntityID {
  /**
   *
   * @param {object|string|Identifier} identifier
   * @param {object|string|Namespace} namespace
   */
  constructor(identifier, namespace) {
    this.identifier = Identifier.make(identifier);
    this.namespace = Namespace.make(namespace);
  }

  /**
   *
   */
  toString() {
    const { identifier, namespace } = this;
    return [namespace, identifier].map((v) => `${v}`).join('*');
  }

  /**
   *
   */
  static parse(str) {
    if (!str) throw new Error('Unable to parse entity ID: no value provided.');
    const [namespace, identifier] = str.split('*');
    return new EntityID(identifier, namespace);
  }

  /**
   *
   */
  static make(value) {
    if (!value) throw new Error('Unable to make entity ID: no value was provided.');
    if (value instanceof EntityID) return value;
    if (typeof value === 'string') return EntityID.parse(value);
    return new EntityID(value.identifier, value.namespace);
  }
}

export default EntityID;
