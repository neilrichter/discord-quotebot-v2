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

module.exports = {
    parseParams: parseParams,
    removeParams: removeParams,
}