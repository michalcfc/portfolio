interface Links {
  id: number
  name: string,
  uri: string
}

export interface HeaderProps {
  theme: string
  links: Links[]
  toggleTheme: () => void
}
