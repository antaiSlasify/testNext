import styles from './footerLinks.module.less';

export type LinkItem = {
  text: string;
  href: string;
};

type FooterLinksProps = {
  title: string;
  items: LinkItem[];
};

const FooterLinks = ({ title, items }: FooterLinksProps) => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.title}>{title}</div>
      <ul className={styles.links}>
        {items.map((item) => (
          <li key={item.text}>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
