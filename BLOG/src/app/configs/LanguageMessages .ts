export interface LanguageMessages {
    [key: string]: {
      message: string;
    };
  }

import en_in from '../../i18n/lang.en-in.json';
import hi_in from '../../i18n/lang.hi-in.json';

const enIn: LanguageMessages = en_in;
const hiIn: LanguageMessages = hi_in;