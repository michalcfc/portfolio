export type TabIndex = number | null;

export type TabsContextInterface = {
    selectedTab: number | null;
    setSelectedTab(arg: TabIndex): void
};
