import { Button, ButtonProps } from "@mui/material";
import { cn } from "@utils/cn";

interface CustomButtonProps extends ButtonProps {
  className?: string;
}

const PrimaryButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      className={cn(className, "bg-blue-primary")}
      sx={{
        fontFamily: "Public Sans, sans-serif",
        fontSize: "16px",
        textTransform: "none",
        borderRadius: "6px",
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
