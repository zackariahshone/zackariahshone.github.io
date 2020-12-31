/**
 *
 * Asynchronously loads the component for NavScroll
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
