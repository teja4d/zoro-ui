import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  label: string | ReactNode;
  className?: string;
  isDisabled?: boolean;
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> ;
};

function Button({
  label,
  onClick,
  className,
  isDisabled = false,
  type,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${"w-full py-2 px-4 h-max-40 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1  focus:ring-offset-1 focus:ring-indigo-500"} ${
        isDisabled || isLoading ? "cursor-not-allowed opacity-45" : ""
      } ${className}`}
      onClick={onClick}
      disabled={isDisabled || isLoading}
      {...props}
    >
      <div className="flex justify-center items-center">
        {" "}
        {isLoading && (
          <p className="">{"Loading..."}</p>
        )}
        {!isLoading && <p className="">{label}</p>}
      </div>
    </button>
  );
}

export default Button;
