class Serializable {
    writeType(writer) {
      throw new Error('writeType must be implemented');
    }
  
    writeValue(writer) {
      throw new Error('writeValue must be implemented');
    }
  }
  
  module.exports = Serializable;