import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react'
import PropTypes from 'prop-types'

function ProfileInfoInput(props) {
    const { placeholder } = props;
    const [value, setValue] = React.useState('value');
    const inputRef = React.useRef(null);
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    return (
        <Input
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
            icon={'EditIcon'}
            value={value}
            name={'name'}
            error={false}
            ref={inputRef}
            onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="ml-1" />
    )
}

ProfileInfoInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

export default ProfileInfoInput