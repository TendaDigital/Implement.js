import ErrorFactory from "./factory"

export const InvalidArrayElement = new ErrorFactory({
  message: ({ interfaceName }) => (`
    Failed to implement interface: '${interfaceName}'.
    
  `)
})

export const InvalidTypeImplementation = new ErrorFactory({
  message: ({ interfaceName, type, property, expectedType } = {}) => (`
    Failed to implement interface: '${interfaceName}'.
    Invalid type: '${type}' given to property: '${property}', expected: '${expectedType}'.
  `)
})

export const InvalidInterface = new ErrorFactory({
  message: 'Invalid object given as Interface property, must be a valid type() object.'
})

export const InvalidType = new ErrorFactory({
  message: ({ type } = {}) => (`
    Invalid type: '${type}' passed to type().
    Must be one of 'number', 'object', 'string', 'symbol', 'function', 'boolean', or 'array'.
  `)
})

export const InvalidShapeArray = new ErrorFactory({
  message: (`
    Shape is not an array or an invalid was element given as a shape.
    Elements must be a valid type() or Interface().
  `)
})

export const InvalidShape = new ErrorFactory({
  message: 'Invalid object given as a type shape, must be a valid Interface().'
})