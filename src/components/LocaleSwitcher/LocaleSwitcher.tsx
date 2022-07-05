import React from 'react';
import { useRouter } from 'next/router';
import { Link } from '~components/common/Link';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const otherLocales = locales?.filter((locale) => locale !== activeLocale);

  return (
    <div>
      <ul>
        {otherLocales?.map((locale) => {
          const { pathname, query } = router;
          return (
            <li key={locale}>
              <Link
                name={locale}
                locale={locale}
                href={{ pathname, query }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LocaleSwitcher;
