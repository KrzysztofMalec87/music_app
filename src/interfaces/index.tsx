export interface SearchItemInterface {
  key: number;
  prop: object;
}

export interface AppStateinterface {
  queryResults: object[];
  playlist: object[];
}

export interface OneKeyObjectInterface {
  [key: string]: object;
}
