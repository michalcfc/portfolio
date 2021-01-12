interface Options {
  value: number,
  label: string
}

export interface SelectProps {
  placeholder?: string
  defaultValue?: string
  label: string
  defaultOptions?: Options[]
  numberOptionsValue?: boolean
  onChange: (event: React.FormEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FormEvent<HTMLInputElement>) => void
  onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.FormEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.FormEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.FormEvent<HTMLInputElement>) => void
}

