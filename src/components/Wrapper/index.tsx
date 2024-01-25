import AppBar from "@/components/AppBar";

interface WrapperProps {
  children: React.ReactElement;
  withAppBar?: boolean;
}

export const WrapperRadial: React.FC<WrapperProps> = ({
  children,
  withAppBar = true,
}: WrapperProps) => {
  return (
    <div className="wrapper-radial">
      {withAppBar && <AppBar />}
      {children}
    </div>
  );
};

export const WrapperPrivate: React.FC<WrapperProps> = ({
  children,
  withAppBar = true,
}: WrapperProps) => {
  return (
    <div className="wrapper-private">
      {withAppBar && <AppBar />}
      <div className="mt-[28px]">{children}</div>
    </div>
  );
};
