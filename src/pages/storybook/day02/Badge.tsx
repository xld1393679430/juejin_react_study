import React from "react";

interface BadgeProps {
  status: "positive" | "negative" | "warning" | "error" | "neutral";
  label: string;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const { status, label, ...rest } = props
  return (
    <div>
      <p>status: {status}</p>
      <p>label: {label}</p>
    </div>
  );
};

export default Badge;
