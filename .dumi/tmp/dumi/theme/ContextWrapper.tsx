// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';

import nprogress from '/Users/songlun/Desktop/workspace/web/WuKongIMDocs/node_modules/nprogress';
import './nprogress.css';

import { SiteContext } from '/Users/songlun/Desktop/workspace/web/WuKongIMDocs/node_modules/dumi/dist/client/theme-api/context.js';
import { demos, components } from '../meta';
import { locales } from '../locales/config';

const entryExports = {
  
  
};

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(true);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // mark loading when route change, page component will set false when loaded
        setLoading(true);

        // start nprogress
        nprogress.start();

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  return (
    <SiteContext.Provider value={{
      pkg: {"name":"WuKongIMDocs","description":"Docs For WuKongIM","version":"0.0.1","license":"MIT","authors":["tt@gmail.com"]},
      historyType: "browser",
      entryExports,
      demos,
      components,
      locales,
      loading,
      setLoading,
      themeConfig: {"footer":"Copyright © 2023 | Powered by 唐僧叨叨 | <a href='https://beian.miit.gov.cn/' style='color:gray'>ICP备案号：沪ICP备2021032718号-4</a>","prefersColor":{"default":"light","switch":true},"nprogress":true,"logo":"/logo.svg","name":"唐僧叨叨","hd":{"rules":[]},"socialLinks":{"github":"https://github.com/WuKongIM/WuKongIM"}},
    }}>
      {outlet}
    </SiteContext.Provider>
  );
}
