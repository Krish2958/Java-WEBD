import { RoutesEnum } from './enums';

/**
 * @returns {RoutesEnum}
 */
export const getActiveBaseRoute = () => {
  const activeRoute = Object.values(RoutesEnum).find((route) => {
    const currentBasePage = window.location.pathname.split('/')[1];
    const currentBaseRoute = `/${currentBasePage}`;

    return route === currentBaseRoute;
  });

  return activeRoute ?? RoutesEnum.PageNotFound;
};
