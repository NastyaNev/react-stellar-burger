import React from 'react'
import styles from "./feed-info.module.css"

type TFeedInfo = {
    className: string,
}

function FeedInfo(props: TFeedInfo) {
    const { className } = props;
    return (
        <li className={[className].join(" ")} >
            <ul>
                <li>
                    <ul>
                        <li>
                            <h3>Готовы:</h3>
                        </li>
                        <li>
                            <h3>В работе:</h3>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>Выполнено за всё время:</h3>
                </li>
                <li>
                    <h3>Выполнено за сегодня:</h3>
                </li>
            </ul>
        </li>
    )
}

export default FeedInfo