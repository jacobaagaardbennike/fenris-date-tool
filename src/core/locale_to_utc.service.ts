import { convertDanishTimeToUtc } from "../timezone_rules/denmark.rule";
import TimeZone from "./timeZone.type";


const ConvertLocaleTimeToUtc = (inputString: string, timeZone: TimeZone): string => {

  switch (timeZone) {
    case 'Europe/Copenhagen': {
      return convertDanishTimeToUtc(inputString);
    }
    default:
      throw new Error('unspported timeZone')
  }
}

export default ConvertLocaleTimeToUtc;