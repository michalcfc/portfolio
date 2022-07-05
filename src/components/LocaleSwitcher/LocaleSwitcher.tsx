import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
              <Link href={{ pathname, query }} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default LocaleSwitcher;
