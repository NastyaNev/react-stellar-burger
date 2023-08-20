import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './bun.module.css'

export type TBunProps = {
    className: string,
    part: 'top' | 'bottom' | undefined,
    note: string,
    found: {
        name: string,
        price: number,
        image_mobile: string,
        id: string,
    },
};

function Bun(props: TBunProps) {
    const { className, part, note, found } = props;

    return (
        <li className={['mr-4', className, styles.bun].join(' ')} >
            {found &&
                <ConstructorElement
                    type={part}
                    isLocked={true}
                    text={[found.name, note].join(" ")}
                    price={found.price}
                    thumbnail={found.image_mobile}
                    key={found.id}
                />
            }
        </li>
    )
}

export default Bun