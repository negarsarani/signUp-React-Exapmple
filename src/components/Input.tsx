import { inputtype } from '../types/type';

const Input = ({
  placeholder,
  name,
  value,
  onChangeHandler,
  type,
  validateForm,
}: inputtype) => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <input
        className=" text-gray-500 outline-none px-2 py-2  "
        name={name}
        onChange={(e) => {
          onChangeHandler(e);
          // validateForm(name);
        }}
        onKeyUp={() => validateForm(name)}
        onBlur={() => validateForm(name)}
        // onClick={() => validateForm(name)}
        value={value}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
