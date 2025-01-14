"use client";

import { CategoryAndLabel } from "@/config/types";
import { createContext, useContext } from "react";

export interface StaticDataContextType {
  categoryLabelList: CategoryAndLabel[];
  allTags: string[];
}

const StaticDataContext = createContext<StaticDataContextType | null>(null);

export const StaticDataProvider = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: StaticDataContextType;
}) => {
  return (
    <StaticDataContext.Provider value={data}>
      {children}
    </StaticDataContext.Provider>
  );
};

export const useStaticData = (): StaticDataContextType => {
  const context = useContext(StaticDataContext);
  if (!context) {
    throw new Error("useStaticData must be used within a DataProvider");
  }
  return context;
};
