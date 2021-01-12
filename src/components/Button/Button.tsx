import { Btn } from "./Button.styles"
import { ButtonProps } from "./Button.d"

const Button: React.FC<ButtonProps> = ({ name, color, onClick }) => (
  <>
    <Btn 
      color={color} 
      onClick={onClick}
    >
      {name}
    </Btn>
  </>
)

export default Button;
