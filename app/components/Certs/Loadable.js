/**
 *
 * Asynchronously loads the component for Certs
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
