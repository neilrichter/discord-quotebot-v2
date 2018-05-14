/**
 * Parses the parameters from a messages and returns an object
 * with the options given in parameters and their value. Also 
 * removes parameters from the message to treat.
 * @param {string[]} [message] Splitted message
 * @returns {Object} Options detected in the parsed message
 */
const parseParams = message => {
    let options = {};
    message.forEach((element, index, array) => {
        if (element.substr(0, 1) == '-') {
            options[array[index].substr(1)] = array[index+1];
            array.splice(index, 2, array.slice(index, index + 2).join(' '));
        }
    });
    removeParams(message);
    return options;
}

/**
 * Removes the parameters given in a message.
 * @param {string[]} [message] Splitted message
 * @returns {string[]} Splitted message without the parameters
 */
const removeParams = message => {
    for (let i = 0; i < message.length; i++) {
        if (message[i].substr(0, 1) == '-') {
            message.splice(i, 1);
            i--;
        }
    }
}

/**
 * Corrects the color value in function of its form if the # is 
 * missing. If the value does not respect the Hexadecimal color 
 * value standards, color value is set back to defaults.
 * @param {string} color Color passed as a parameter in the message
 * @param {Object} defaults Object representing the default value for each option
 * @returns {string} Sanitized color value
 */
const sanitizeColor = (color, defaults) => {
    if (color.substr(0, 1) !== '#' && color.length !== 7) {
        if (color.length === 6) {
            return `#${color}`;
        } else {
            return defaults.color;
        }
    } else if (color.substr(0, 1) === '#' && color.length !== 7 ) {
        return defaults.color;
    } else {
        return color;
    }
}

/**
 * Extends defaults options with options passed in the parse message.
 * Also sanitizes the color value.
 * @param {Object} options Options passed as parameters in the message
 * @param {Object} defaults Object representing the default value for each option
 * @returns {Object} Extended options object
 */
const extendParams = (options, defaults) => {
    for (let i in defaults) {
        if (!options.hasOwnProperty(i)) {
            options[i] = defaults[i];
        }
    }
    options.color = sanitizeColor(options.color, defaults);
    return options;
}

module.exports = {
    parseParams: parseParams,
    removeParams: removeParams,
    extendParams: extendParams
}