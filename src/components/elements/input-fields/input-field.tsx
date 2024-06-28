import { ChangeEvent } from "react";

type InputFieldProps = {
  label: string;
  type: string;
  id: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string; // New field for error message
};

const InputField = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  className,
  error, // Access error message from props
}: InputFieldProps) => {
  return (
    <div className="block">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block text-black lg:min-w-80 w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
        aria-invalid={!!error} 
        data-testid={id}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;