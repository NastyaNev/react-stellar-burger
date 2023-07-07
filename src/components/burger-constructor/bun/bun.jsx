import React, { useState, useEffect } from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { getArray } from '../../api/api';

function Bun(props) {
    const { type, className, part, note } = props;
    const [ingArray, setIngArray] = useState([]);

    useEffect(() => {
      getArray()
        .then((res) => {setIngArray(res)})
        .catch(err => {
          console.log(err);
        })
    }, [])
  
    if (ingArray.length === 0) {
      return null
    }

    const found = ingArray.data.find(item => {
        return item.type === type;
    })

    return (
        <li className={['mr-4', className].join(' ')}>
            {found && (
                <ConstructorElement
                    type={part}
                    isLocked={true}
                    text={[found.name, note].join(" ")}
                    price={found.price}
                    thumbnail={found.image_mobile}
                    key={found._id}
                />)
            }
        </li>
    )
}

export default Bun