import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface NavItemProps {
  open?: boolean
  name?: string
  component?: JSX.Element
  isHorizontal: boolean
  icon: IconDefinition
  setOpen?: (arg: boolean) => void
}
