export type Submenu = {
  id: number
  name: string
  uri: string
};

export type Links = {
  id: number
  uri: string
  name: string
  type?: 'button'
  submenu?: Submenu[]
};
