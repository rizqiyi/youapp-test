import AppBar from "@/components/AppBar";

interface WrapperProps {
  children: React.ReactElement;
}

export const WrapperRadial: React.FC<WrapperProps> = ({
  children,
}: WrapperProps) => {
  return (
    <div className="wrapper-radial">
      <AppBar />
      {children}
    </div>
  );
};

export const WrapperPrivate: React.FC<WrapperProps> = ({
  children,
}: WrapperProps) => {
  return (
    <div className="wrapper-private">
      <AppBar />
      {children}
    </div>
  );
};
