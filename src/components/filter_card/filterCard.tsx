import React from 'react'
import styles from './filterCard.module.css'
import SelectComponent from '../select_component/selectComponent';

const select1 = [
  { code: '1.1', name: 'Пхукет'},
  { code: '1.2', name: 'Пхукет 2'},
  { code: '1.3', name: 'Пхукет 3'}
];

const select2 = [
  { code: '2.1', name: 'Апартаменты'},
  { code: '2.2', name: 'Апартаменты 2'},
  { code: '2.3', name: 'Апартаменты 3'}
];
const select3 = [
  { code: '3.1', name: '1 ванная'},
  { code: '3.2', name: '2 ванная'},
  { code: '3.3', name: '3 ванная'}
];

const select4 = [
  { code: '4.1', name: '1 спальня'},
  { code: '4.2', name: '2 спальня'},
  { code: '4.3', name: '3 спальня'}
];
const select5 = [
  { code: '5.1', name: 'От $4 млн'},
  { code: '5.2', name: 'От $5 млн'},
  { code: '5.3', name: 'От $6 млн'}
];

const select6 = [
  { code: '6.1', name: 'До $10 млн'},
  { code: '6.2', name: 'До $15 млн'},
  { code: '6.3', name: 'До $20 млн'}
];

const FilterCard = () => {

  return (
        <div className={styles.left_section}>
          <input type="text" className={styles.input} placeholder='Поиск по названию' />
          <div className={styles.select_container}>
            <SelectComponent selectOptions={select1} selectedOption={select1[0]} />
            <SelectComponent selectOptions={select2} selectedOption={select2[0]} />
            <div className={styles.inline_container1}>
              <SelectComponent selectOptions={select3} selectedOption={select3[0]} />
              <SelectComponent selectOptions={select4} selectedOption={select4[0]} />
            </div>
            <div className={styles.mt_4}>
              <h2 className={styles.price_title}>Цена</h2>
              <div className={styles.inline_container1}>
                <SelectComponent selectOptions={select5} selectedOption={select5[0]} />
                <span className={styles.separator}>–</span>
                <SelectComponent selectOptions={select6} selectedOption={select6[0]} />
              </div>
            </div>
            <div className={styles.button_container}>
              <button className={styles.button_outline}>Сбросить</button>
              <button className={styles.button}>1458 объектов</button>
            </div>
          </div>
        </div>
  )
}

export default FilterCard