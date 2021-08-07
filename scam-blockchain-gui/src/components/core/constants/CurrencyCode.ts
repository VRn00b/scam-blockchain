import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.SCAM]: IS_MAINNET ? 'SCM' : 'TSCM',
};
