import React from 'react';
import dayjs from 'dayjs';

import * as styles from './style.css';
import { Typography } from '@material-ui/core';
import { isSameMonth, isFirstDay, isSameDay, getMonth } from '../../services/calendar';
import Schedule from '../Schedule/index';

const CalendarElement = ({ day, month, schedules, ...props }) => {
    const today = dayjs();
    const currentMonth = getMonth(month);
    const format = isFirstDay(day) ? 'M月D日' : "D";
    const isToday = isSameDay(day, today);
    const textColor = isSameMonth(day, currentMonth) ? "textPrimary" : "textSecondary";
    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align="center"
                variant='caption'
                component='div'
            >
                <span className={isToday ? styles.today : ""}>
                    {day.format(format)}
                </span>
            </Typography>
            <div className={styles.schedules}>
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} {...props} />
                ))}
            </div>
        </div>
    )
};

export default CalendarElement;