import {Peer} from '../types';

/**
 * THIS MUST BE DOCUMENTED IN THE ConnQuery CLASS, not here.
 */
export function passesExpBackoff(
  step: number,
  max: number = Infinity,
  timestamp: number = Date.now(),
) {
  return (peer: Peer) => {
    const prevAttempt = peer.stateChange! || 0;
    const numFailures = peer.failure! || 0;
    const expBackoff = Math.min(Math.pow(2, numFailures) * step, max);
    const nextAttempt = prevAttempt + expBackoff;
    return nextAttempt < timestamp;
  };
}

/**
 * THIS MUST BE DOCUMENTED IN THE ConnQuery CLASS, not here.
 */
export function passesGroupDebounce(
  groupMin: number,
  timestamp: number = Date.now(),
) {
  return (group: Array<Peer>) => {
    const newestStateChange = group.reduce(
      (M: number, p: Peer) => Math.max(M, p.stateChange || 0),
      0,
    );
    const minTimeThreshold: number = newestStateChange + groupMin;
    if (timestamp < minTimeThreshold) return [];
    else return group;
  };
}
