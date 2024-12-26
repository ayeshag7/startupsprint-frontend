import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({ 
    id, 
    name, 
    value, 
    onChange, 
    label, 
    placeholder, 
    required = false, 
    error = '', 
    className = '', 
}) => { 
    const [showPassword, setShowPassword] = useState(false); 

    const toggleShowPassword = () => { 
        setShowPassword((prev) => !prev); 
    }; 

    return ( 
        <div className="relative flex-1 min-w-[1px]"> 
            {label && ( 
                <label htmlFor={id} className="block font-bold mb-[5px]"> 
                    {label} 
                </label> 
            )} 
            <input 
                type={showPassword ? 'text' : 'password'} 
                id={id} 
                name={name} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                required={required} 
                minLength={8} 
                className={`w-full border rounded-md px-2 py-1 pr-8 ${className}`} 
            /> 
            <button 
                type="button" 
                onClick={toggleShowPassword} 
                className={`absolute right-2 ${label ? 'top-[57%]' : 'top-[50%]'} transform -translate-y-1/2 bg-transparent border-none p-0 focus:outline-none`} 
            > 
                {showPassword ? ( 
                    <Eye className="w-[18px] h-[18px] dark:text-white text-gray-800" />
                ) : ( 
                    <EyeOff className="w-[18px] h-[18px] dark:text-white text-gray-800" />
                )} 
            </button> 

            {error && <div className="text-red-500 mt-2">{error}</div>} 
        </div> 
    ); 
}; 

export default PasswordInput;