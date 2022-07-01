export interface TabsD {
  isActiveTab?: number | null
}

export type TabsChildrenProps = {
  id: number
  isActiveTab?: number
  currentTab: number | null
  onChange?: () => void
  setCurrentTab: (arg: number) => void
};
