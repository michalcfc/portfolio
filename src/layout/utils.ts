import { Views } from "~layout/types";

export const isLeftAsideVisible = (view: Views) => {
    const views = ["withAsides", "withLeftAside"]
    return views.includes(view)
}

export const isRightAsideVisible = (view: Views) => {
    const views = ["withAsides", "withRightAside"]
    return views.includes(view)
}

