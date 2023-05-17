import { convertDanishTimeToUtc } from '../timezone_rules/denmark.rule';
import FDTTimezone from './fdt_timezone.type';

/**
Converts a locale time string to UTC time based on the provided time zone.
@param {string} inputString - The locale time string to convert to UTC.
@param {FDTTimezone} timeZone - The time zone to use for the conversion.
@returns {string} The converted UTC time string.
@throws {Error} If the provided time zone is unsupported.
*/
const ConvertLocaleTimeToUtc = (inputString: string, timeZone: FDTTimezone): string => {
  switch (timeZone) {
    case 'Europe/Copenhagen': {
      return convertDanishTimeToUtc(inputString);
    }
    default:
      throw new Error('Unsupported timeZone');
  }
};

export default ConvertLocaleTimeToUtc;
