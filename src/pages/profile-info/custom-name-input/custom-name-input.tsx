import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef, useState } from 'react';

interface TCustomNameInputInterface
    extends Omit<React.HTMLProps<HTMLInputElement>, 'size' | 'type' | 'ref'> {
    value: string;
    size?: 'default' | 'small';
    placeholder?: string;
    isIcon?: boolean;
    extraClass?: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const CustomNameInput: React.FC<TCustomNameInputInterface> = ({
    value,
    onChange,
    size = 'default',
    placeholder = 'Name',
    isIcon = false,
    extraClass = '',
    ...rest
}) => {
    const [fieldDisabled, setDisabled] = useState<boolean>(isIcon);

    const [error, setError] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const onIconClick = () => {
        setDisabled(false);
        setTimeout(() => inputRef.current?.focus(), 0);
    };

    const validateField = (value: string) => {
        setError(value.length < 2);
    };

    const onFocus = () => {
        setError(false);
    };

    const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value) {
            validateField(e.target.value);
        } else {
            setError(false);
        }
        isIcon && setDisabled(true);
    };
    return (
        <Input
            type="email"
            placeholder={placeholder}
            onChange={onChange}
            icon={isIcon ? 'EditIcon' : undefined}
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onFocus={onFocus}
            error={error}
            disabled={fieldDisabled}
            onIconClick={onIconClick}
            errorText={'Ой, произошла ошибка!'}
            size={size}
            extraClass={extraClass}
            {...rest}
        />
    );
};