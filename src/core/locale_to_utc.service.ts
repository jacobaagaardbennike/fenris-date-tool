import { convertDanishTimeToUtc } from '../timezone_rules/denmark.rule';
import FDTTimezone from './fdt_timezone.type';

const ConvertLocaleTimeToUtc = (inputString: string, timeZone: FDTTimezone): string => {
  switch (timeZone) {
    case 'Europe/Copenhagen': {
      return convertDanishTimeToUtc(inputString);
    }
    default:
      throw new Error('unspported timeZone');
  }
};

export default ConvertLocaleTimeToUtc;
