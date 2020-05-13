import dayjs from 'dayjs';
import { CALENDAR_SET_MONTH } from './actions';
import { formatMonth } from '../../services/calendar';

const init = formatMonth(dayjs());

const calendarReducer = (state = init, { type, payload }) => {
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
};

export default calendarReducer;