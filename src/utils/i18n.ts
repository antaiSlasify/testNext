export const setLocaleCookie = (content: string) => {
  if (typeof document === 'undefined') return;
  // document.cookie = `NEXT_LOCALE=${content}`;
  document.cookie = `nf_lang=${content}`;
};
