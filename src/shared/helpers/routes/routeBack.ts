import { NavigateFunction } from "react-router-dom";

export const routeBack = (navigate: NavigateFunction) => () => navigate(-1);
