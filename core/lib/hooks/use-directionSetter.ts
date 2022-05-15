import { useAtomValue } from 'jotai';
import { getDirection } from 'components/Provider/ThemeProvider';
import { useEffect } from 'react';
import { localeAtom } from 'core/atoms';

export const useDirectionSetter = () => {
  const locale = useAtomValue(localeAtom);

  useEffect(() => {
    let direction = getDirection(locale);
    window.document.documentElement.dir = direction;
    window.document.documentElement.lang = locale;
  }, [locale]);

  return null;
};
