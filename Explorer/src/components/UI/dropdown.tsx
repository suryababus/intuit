import { useEffect, useState } from "react";
import { ChevronDownIcon } from "../icons/down-arrow";

export type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Option[];
  onChange: (value: Option) => void;
  value: Option;
};

export const Dropdown = (props: DropdownProps) => {
  const { onChange, options, value } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const onOutsideClick = () => {
      setIsOpen(false);
    };
    document.addEventListener("click", onOutsideClick);

    return () => {
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);

  const onOptionClick = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative w-28 cursor-pointer">
        <div onClick={toggleDropdown} className="flex items-center gap-2 ">
          <div className="flex-1">{value.label}</div>
          <ChevronDownIcon className="w-4 h-4" />
        </div>
        <div
          className={`absolute z-10 bg-input overflow-hidden mt-4 transition-all ${isOpen ? "max-h-64" : "h-0"}`}
        >
          {options.map((option) => {
            return (
              <div
                key={option.value}
                className="px-3 py-2 hover:bg-primary cursor-pointer"
                onClick={() => onOptionClick(option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
