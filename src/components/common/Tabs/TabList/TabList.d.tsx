import React from "react";

export interface TabListD {
    index: number
    isSelected: boolean
    children: React.ReactNode
    onSelect: (arg: number) => void
}
