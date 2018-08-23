import { createSelector } from "reselect";

export const getSettingState = store => store.settingReducer;

export const getCurrency = createSelector(getSettingState, settings =>
  settings.get("currency")
);

export const getLocale = createSelector(getSettingState, settings =>
  settings.get("locale")
);
export const getReportName = createSelector(getSettingState, settings =>
  settings.get("reportName")
);
export const getEmail = createSelector(getSettingState, settings =>
  settings.get("email")
);
