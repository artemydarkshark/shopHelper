import { createSelector } from "reselect";

export const getNavState = store => store.nav;

export const getRouteId = createSelector(getNavState, nav => {
  const [route] = nav.routes.slice(-1);

  return route.params.id;
});
