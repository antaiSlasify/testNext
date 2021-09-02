import { constant } from './constant';

const { PATH_TW, PATH_EN, PATH_CN } = constant;

export const replaceLangUrl = (pathName: string, langPath: string) =>
  pathName.replace(/\/(tw|cn|en)\//, `${langPath}`);

export const getHrefLangUrl = (pathName: string, langPath: string) => {
  if (pathName === '/') {
    return `${process.env.baseUrl}${langPath}`;
  }
  return `${process.env.baseUrl}${replaceLangUrl(pathName, langPath)}`;
};

export const getCompleteURLByLangPath = (
  pathName: string,
  appendURL: string
) => {
  const getCompleteURL = (langPath: string) =>
    `${process.env.baseUrl}${langPath}${appendURL}`;

  if (pathName.includes(PATH_TW)) {
    return getCompleteURL(PATH_TW);
  }

  if (pathName.includes(PATH_CN)) {
    return getCompleteURL(PATH_CN);
  }

  return getCompleteURL(PATH_EN);
};

/* export const getHrefInWindow = () => {
  if (typeof window !== 'undefined') {
    return window.location.href;
  }
  return '';
}; */

/*
// 為了解決history.push時URL改變但pathName不會改變的問題
export const getLangCodeInWindow = () => {
  const href = getHrefInWindow();
  if (href.includes(PATH_TW)) {
    return zh_TW;
  }

  if (href.includes(PATH_CN)) {
    return zh_CN;
  }

  if (href.includes(PATH_EN)) {
    return en_US;
  }

  return '';
};
*/

/* export const getHrefLangUrlInWindow = (langPath: string) => {
  return replaceLangUrl(getHrefInWindow(), langPath);
}; */

/* export const getBaseUrlInWindow = (): string => {
  if (typeof window !== 'undefined') {
    const { href, host } = window.location;
    const re = new RegExp(`^http.*${host}`);
    if (href.match(re)) {
      const matchs = href.match(re) as RegExpMatchArray;
      return matchs[0];
    }
  }
  return '';
}; */
