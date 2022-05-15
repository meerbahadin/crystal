import { useAtom } from 'jotai';
import { localeAtom } from 'core/atoms';
import { terms } from 'translations';

export const useTranslate = () => {
  const [locale, setLocale] = useAtom(localeAtom);

  const translate = (term: string, variables: string | number = '') => {
    let translatedTerm = terms[term]?.[locale];

    /**
     * TODO:
     *   - If necessary, add multi-variables support to the string
     */

    if (Boolean(translatedTerm)) {
      if (translatedTerm.match(/{{(.*?)}}/)) {
        const translatedTermWithVariable = translatedTerm.replace(
          /{{(.*?)}}/,
          `${variables}`
        );

        return translatedTermWithVariable;
      }

      return translatedTerm;
    }

    return term;
  };

  return { locale, setLocale, t: translate };
};
