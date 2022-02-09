import AppWrapper from './src/utils/AppWrapper';

export const wrapRootElement = AppWrapper;

// trigger an immediate page refresh when an update is found,
// source: https://github.com/gatsbyjs/gatsby/issues/9087
export const onServiceWorkerUpdateReady = () => window.location.reload();
