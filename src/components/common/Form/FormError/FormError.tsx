import { FormErrorD } from './FormError.d';

// components
import { Text } from '~components/common/Text';

// utils
import { COLORS } from '~utils/styles/colors';
import { SPACING } from '~utils/styles/spacing';

const FormError = ({
  text,
}: FormErrorD) => (
  <Text
    text={text}
    mt={SPACING.sm}
    color={COLORS.red}
  />
);

export default FormError;
