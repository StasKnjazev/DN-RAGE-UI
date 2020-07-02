import React from 'react'
import '../css/reports.css'
import LineData from '../uikit/LineData'
import StatContainer from '../uikit/StatContainer'
import InfoBlock from '../uikit/InfoBlock'
import ProgressBar from '../uikit/ProgressBar'
import ProgressBarCircle from '../uikit/ProgressBarCircle'
import Card from '../uikit/Card'
import ButtonGps from '../uikit/ButtonGps'
import Button from '../uikit/Button'
import BusinessCard from '../uikit/BusinessCard'
import CarCard from '../uikit/CarCard'
import ReportItemList from '../uikit/ReportItemList'
import { useState } from 'react'
import { useRef } from 'react'

const Reports = ({ }) => {

    const data = [
        [
            {
                status: 0,
                type: 0,
                text: "Здравствуйте! помогите решить проблему с покупкой дома",
                time: "01.07.2020 | 21:00",
                number: 123123,
                dialog: [
                    {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                    {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'},
                    {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                    {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'},
                    {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                    {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'},
                    {type: 0, text: 'Не могу купить дом', time: '01.07.2020 | 21:00'},
                    {type: 1, text: 'Попробуйте перезайти', time: '01.07.2020 | 21:01', name: 'Namename Namename'}
                ]
            },
            {
                status: 1,
                type: 0,
                text: "Здравствуйте! помогите решить проблему с покупкой дома",
                time: "01.07.2020 | 21:00",
                number: 123123
            },
            {
                status: 1,
                type: 0,
                text: "Здравствуйте! помогите решить проблему с покупкой дома",
                time: "01.07.2020 | 21:00",
                number: 123123
            }
        ],
        [
            {
                status: 0,
                type: 1,
                text: "23 ID Читер",
                time: "01.07.2020 | 21:00",
                number: 123123
            },
            {
                status: 1,
                type: 1,
                text: "222 ID покупает валюту",
                time: "01.07.2020 | 21:00",
                number: 123123
            },
            {
                status: 1,
                type: 1,
                text: "Помогите застрял",
                time: "01.07.2020 | 21:00",
                number: 123123
            }
        ]
    ]

    const reportMessage = useRef(null)

    const [reportData, setReportData] = useState({})

    return (
        <React.Fragment>
            <div className="accountmenu__content__cards__item">
                <div className="accountmenu__content__reports__container">
                    <span className="accountmenu__content__cards__reports__header">Все обращения</span>
                    <div className="accountmenu__content__cards__item__list__reports">
                        <span className="accountmenu__content__cards__item__list__reports__name">Вопросы</span>
                        <div className="accountmenu__content__reports__list">
                            {data[0].map((item, index) => (
                                <ReportItemList
                                    status={item.status}
                                    text={item.text}
                                    time={item.time}
                                    number={item.number}
                                    type={0}
                                    key={'reports-ask-'+ index.toString()}
                                    setReportData={() => setReportData(data[0][index])}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="accountmenu__content__cards__item__list__reports">
                        <span className="accountmenu__content__cards__item__list__reports__name_red">Жалобы</span>
                        <div className="accountmenu__content__reports__list">
                            {data[1].map((item, index) => (
                                <ReportItemList
                                    status={item.status}
                                    text={item.text}
                                    time={item.time}
                                    number={item.number}
                                    type={1}
                                    key={'reports-report-'+ index.toString()}
                                    setReportData={() => setReportData(data[1][index])}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__cards__blitem">
            {reportData.number && ( 
               <div className="accountmenu__content__reports__dialog__container">
                    <div className="accountmenu__content__reports__dialog__header">
                        <div className="accountmenu__content__reports__dialog__header__data">
                            <img
                                src={reportData.type === 0 ? require("../icons/question_cloud.svg") : require("../icons/report_icon.png")}
                                alt=""
                                className={reportData.type === 0 ? "accountmenu__content__reports__list__header__icon_ask" : "accountmenu__content__reports__list__header__icon_report"}    
                            />
                            <span className="accountmenu__content__reports__dialog__header__type">{reportData.type === 0 ? "Вопрос" : "Жалоба"}</span>
                            <span className="accountmenu__content__reports__dialog__header__num">{`запрос №${reportData.number}`}</span>
                            <span className="accountmenu__content__reports__dialog__header__time">{reportData.time}</span>
                        </div>
                        <div className="accountmenu__content__reports__dialog__header__buttons">
                            <div className="accountmenu__content__reports__dialog__header__btn">
                                <img src={require("../icons/lock.svg")} className="accountmenu__content__reports__dialog__header__icon" />
                                <span className="accountmenu__content__reports__dialog__header__btn__text">закрыть тему</span>
                            </div>
                            <div className="accountmenu__content__reports__dialog__header__btn">
                                <img src={require("../icons/delete.svg")} className="accountmenu__content__reports__dialog__header__icon" />
                                <span className="accountmenu__content__reports__dialog__header__btn__text">удалить</span>
                            </div>
                        </div>
                    </div>
                    <span className="accountmenu__content__reports__dialog__header__name">
                        {reportData.name}
                    </span>
                    <div className="accountmenu__hr" style={{marginTop: '4%', marginBottom: '4%'}} />
                    <div className="accountmenu__content__reports__dialog__content">
                        {reportData.dialog ? reportData.dialog.map((item, index) => (
                            <div key={`report-msg-` + index} className={item.type === 0 ? "accountmenu__content__reports__dialog__content__item__lcontainer" : "accountmenu__content__reports__dialog__content__item__rcontainer"}>
                                <div className="accountmenu__content__reports__dialog__content__item__header">
                                    {item.name && (
                                        <span className="accountmenu__content__reports__dialog__content__item__name">
                                            <span className="accountmenu__content__reports__dialog__content__item__name_b">
                                                Администратор:
                                            </span>
                                            {` ${item.name}`}
                                        </span>
                                    )}
                                    <span className="accountmenu__content__reports__dialog__content__item__time">
                                        {item.time}
                                    </span>
                                    {!item.name && (
                                        <span className="accountmenu__content__reports__dialog__content__item__name">
                                            {`Вы`}
                                        </span>
                                    )}
                                </div>
                                <span className={item.type === 0 ? "accountmenu__content__reports__dialog__content__item__msg_to" : "accountmenu__content__reports__dialog__content__item__msg_frm"}>
                                    {item.text}
                                </span>
                            </div>
                        )) : null} 
                    </div>
                    <div className="accountmenu__content__reports__dialog__input">
                        <label>
                            <input ref={reportMessage} type="text" name="name" placeholder="Введите сообщение..." className="accountmenu__report__input" />
                        </label>
                        <Button text="Отправить" onPress={() => console.log(reportMessage.current.value)} />
                    </div>
               </div>
               )}
            </div>
        </React.Fragment>
    )
}

export default Reports