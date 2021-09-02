import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';

import AppLayout from '../components/AppLayout';

import 'antd/dist/antd.less';
import '../../styles/globals.less';

import localeEN from '../locales/en-US';
import localeTW from '../locales/zh-TW';
import localeCN from '../locales/zh-CN';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const shortLocale = locale ? locale : 'en-US';

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en-US':
        return localeEN;
      case 'zh-TW':
        return localeTW;
      case 'zh-CN':
        return localeCN;
      default:
        return localeEN;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </IntlProvider>
  );
};

export default MyApp;
