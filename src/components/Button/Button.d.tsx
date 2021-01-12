export interface ButtonProps {
    name: string
    color: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  }