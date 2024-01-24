import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const baseClass =
    "bg-btn-primary min-h-[48px] w-full relative z-[2] text-center text-[14px] text-white rounded-lg font-bold";
  return (
    <div className="relative">
      <button {...props} className={props.className ? `${baseClass} ${props.className}` : baseClass} />
      <div className="bg-btn-primary-blur z-[1] w-full min-h-[48px] bottom-[-10px] absolute blur" />
    </div>
  );
};

export default Button;
