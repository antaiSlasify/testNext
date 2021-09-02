import { Layout } from 'antd';

import AppFooter from '../AppFooter';

type AppLayoutProps = {
  children: JSX.Element;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <Layout>
      {children}
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
