export type Address = string;

export type Peer = {
  address: Address;
  key?: string;
  source:
    | 'seed'
    | 'pub'
    | 'manual'
    | 'friends'
    | 'local'
    | 'dht'
    | 'bt'
    | 'stored';
  state?: undefined | 'connecting' | 'connected';
  stateChange?: number;
  failure?: number;
  client?: boolean;
  duration?: {
    mean: number;
  };
  ping?: {
    rtt: {
      mean: number;
    };
    skew: number;
    fail?: any;
  };
  announcers?: number;
};
