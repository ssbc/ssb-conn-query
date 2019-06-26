import {AddressData} from 'ssb-conn-db/lib/types';

export type Address = string;

export type Peer = AddressData & {
  address: Address;
  state?: undefined | 'connecting' | 'connected';
};
