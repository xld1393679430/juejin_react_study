import React from "react";

interface BadgeProps {
  status: "success" | "error" | "default";
  label: string;
}

const Badge: React.FC<BadgeProps> = ({ status, label }) => {
  return (
    <div>
      <p>status: {status}</p>
      <p>label: {label}</p>
    </div>
  );
};

export default Badge;
