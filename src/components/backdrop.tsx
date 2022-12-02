import { forwardRef, HTMLAttributes, ReactNode } from "react";

type Props = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const renderBackdrop = (props: Props) => <Backdrop {...props} />;

export const Backdrop = forwardRef<HTMLDivElement, Props>(function Component(
  { children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        zIndex: 1040,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#000",
        opacity: 0.5,
        cursor: "pointer",
      }}
      {...props}
    >
      {children}
    </div>
  );
});
