/**
 *
 * Asynchronously loads the component for BackGround
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
