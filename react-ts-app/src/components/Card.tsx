import { FC, useState } from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant?: CardVariant;
  onClick?: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  const [state, setState] = useState(0);
  return (
    <div
      className="card-block"
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid red" : "none",
      }}
      onClick={(): void => {
        if (onClick) onClick(state);
      }}
    >
      {children}
    </div>
  );
};

export default Card;
