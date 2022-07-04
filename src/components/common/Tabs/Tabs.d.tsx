export interface TabsD {
  isSelectedTab?: number | null
}

export type TabsChildrenProps = {
  selectedTab: number | null
  setSelectedTab: (arg: number) => void
};
