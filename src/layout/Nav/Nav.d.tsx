import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface NavbarProps {
  name?: string
  icon?: IconDefinition
  active?: boolean
  onClick?: () => void
  dropdownMenu?: JSX.Element
  isHorizontal?: boolean
}
