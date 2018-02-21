import debug from 'debug';

const BASE = 'nfc-client';
const COLOURS = {
  trace: 'lightblue',
  info: 'blue',
  warn: 'pink',
  error: 'red',
};

class Log {
  static generateMessage(level, message, source) {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const createDebug = debug(namespace);

    // Set the color of the message based on level
    createDebug.color = COLOURS[level];

    if (source) {
      createDebug(source, message);
    } else {
      createDebug(message);
    }
  }

  static trace(message, source) {
    return Log.generateMessage('trace', message, source);
  }

  static info(message, source) {
    return Log.generateMessage('info', message, source);
  }

  static warn(message, source) {
    return Log.generateMessage('warn', message, source);
  }

  static error(message, source) {
    return Log.generateMessage('error', message, source);
  }
}

export default Log;
