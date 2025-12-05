
import {cn} from "@/lib/utils";
import {LucideIcon} from "lucide-react";


interface ButtonProps {
  label: string;
  Icon?: LucideIcon;
  className?: string;

}

const Button2 = ({ label, Icon, className} : ButtonProps) => {
  return (
    <button
      className={cn(className, 'flex items-center gap-2')}
    >
      {label}
      {Icon && (
        <Icon size={24}
          className={'text-gray-600'}
        />
      )}
    </button>
  );
};
export default Button2;
