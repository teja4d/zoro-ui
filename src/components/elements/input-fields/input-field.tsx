import { ChangeEvent } from 'react';

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  id: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: string; // New field for error message
  required?: boolean;
};

function InputField({
  label,
  name,
  type,
  id,
  value ,
  onChange = () => {},
  placeholder = '',
  className = '',
  required = false,
  error, // Access error message from props
}: InputFieldProps) {
  return (
    <div className="block">
      <label htmlFor={id} className="block font-medium text-sm text-gray-500">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-1 block text-black w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
        aria-invalid={!!error}
        data-testid={id}
        required={required}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default InputField;
