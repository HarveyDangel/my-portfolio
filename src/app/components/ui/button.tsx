'use client'; // Required for interactivity (onClick, hooks, etc.)

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-[#4a4ce2]/60 text-white font-bold py-2 px-4 rounded-[8px]
         shadow-md hover:bg-[#4A4DE2] hover:shadow-[#A0A2FF] hover:scale-110 hover:border-b-1 hover:border-b-white
        transition-all duration-200 ease-in-out
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {children}
    </button>
  );
}