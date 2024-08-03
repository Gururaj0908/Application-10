import { Injectable } from '@angular/core';
import en_in from '../../i18n/lang.en-in.json';
import hi_in from '../../i18n/lang.hi-in.json';
import { GlobalService } from './global.service';
import { Constants } from '../constants';
import { LanguageFile,LanguageEntry } from '../configs/language-files';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public static GetLocale() {
    var lang = localStorage.getItem(Constants.SELECTED_LANGUAGE_CODE);
    if (lang == null) lang = "en_US";
    return lang.replace('_', '-');
  }

  constructor(private gs: GlobalService) { }

  public GetString(key: string, ...args: any[]): string {
    const languageFile = this.GetLanguageFile();
    const entry = (languageFile as { [key: string]: LanguageEntry })[key] || (en_in as { [key: string]: LanguageEntry })[key];
    if (!entry) {
      return `Missing translation for key: ${key}`;  // Handle missing key gracefully
    }
    let message = entry.message;
    for (let index = 0; index < args.length; index++) {
      message = message.replace(`{${index}}`, args[index]);
    }
    return message;
  }
  

  private GetLanguageFile(): LanguageFile {
    const lang = this.gs.LanguageCode;
    switch (lang) {
      case 'hi_in':
        return hi_in as unknown as LanguageFile;
      case 'en_in':
      default:
        return en_in as unknown as LanguageFile;
    }
  }

}