import {Peer} from '../types';

/**
 * THIS MUST BE DOCUMENTED IN THE ConnQuery CLASS, not here.
 */
export function hasNoAttempts(p: Peer): boolean {
  return !p.stateChange;
}

/**
 * THIS MUST BE DOCUMENTED IN THE ConnQuery CLASS, not here.
 */
export function hasOnlyFailedAttempts(p: Peer): boolean {
  return !!p.stateChange && (!p.duration || p.duration.mean == 0);
}

/**
 * THIS MUST BE DOCUMENTED IN THE ConnQuery CLASS, not here.
 */
export function hasSuccessfulAttempts(p: Peer): boolean {
  return !!p.duration && p.duration.mean > 0;
}

/**
 * THIS MUST BE DOCUMENTED IN THE ConnQuery CLASS, not here.
 */
export function hasPinged(p: Peer): boolean {
  return !!p.ping && !!p.ping.rtt && p.ping.rtt.mean > 0;
}
