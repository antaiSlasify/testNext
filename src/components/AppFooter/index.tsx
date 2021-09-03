import { Layout, Select } from 'antd';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

import { constant } from '../../utils/constant';
import { setLocaleCookie } from '../../utils/i18n';

import styles from './appFooter.module.less';

const { Footer } = Layout;
const { Option } = Select;

const { zh_TW, zh_CN, en_US } = constant;

const AppFooter = () => {
  const intl = useIntl();
  const router = useRouter();

  const onLangChange = (langCode: string) => {
    router.push(`/${langCode}`, `/${langCode}`, { locale: langCode });
    setLocaleCookie(langCode);
  };
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.left}>
            <div className={styles.footerSlogan}>
              <p>
                {intl.formatMessage({
                  id: 'message',
                  defaultMessage: 'I am a message',
                })}
              </p>
            </div>
            <Select
              defaultValue={intl.locale}
              className={styles.select}
              onChange={onLangChange}
            >
              <Option value={en_US}>Enlish</Option>
              <Option value={zh_CN}>中文 ( 简体 )</Option>
              <Option value={zh_TW}>中文 ( 繁體 )</Option>
            </Select>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
