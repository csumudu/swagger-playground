import { Layout } from 'antd';
import Header from '../header/Header';
import Routes from '../../Routes';
import './App.scss';
import { useState, useEffect, useContext, createContext } from 'react';
import LeftNav from '../left-nav/LeftNav';
import ctx from '../../shared/services/ContextService';
import { useAppMenu } from '../../shared/hooks/useAppMenu';

function App() {
  const [isLeftNavCollapsed, setIsLeftNavCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { selectedMainMenu } = useAppMenu();

  useEffect(() => {
    ctx.loadFiles();
  }, []);

  useEffect(() => {
    setIsVisible((s) => selectedMainMenu && selectedMainMenu.id != '200');
  }, [selectedMainMenu]);

  const leftNavCollapsedHandler = () => {
    setIsLeftNavCollapsed((s) => !s);
  };
  return (
    <div className="app">
      <Layout>
        <Header />
        <Layout style={{ height: '100vh' }}>
          {isVisible && (
            <LeftNav
              isCollapsed={isLeftNavCollapsed}
              onCollapse={leftNavCollapsedHandler}
            />
          )}
          <Layout style={{ padding: '0 24px 24px' }}>
            <Routes />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
