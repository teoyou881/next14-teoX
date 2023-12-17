'use client';

import { createContext, useState } from 'react';

export const TabContext = createContext({
  tab: 'rec',
  setTab: (tab: 'rec' | 'fol') => {},
});

type Props = { children: React.ReactNode };

export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('rec');

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
}
