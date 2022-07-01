export type TabIndex = number | null;

export type TabPanel = {
    index: TabIndex;
};

export type TabsContextInterface = {
    currentTab: TabIndex;
    setCurrentTab(arg: TabIndex): void
};
