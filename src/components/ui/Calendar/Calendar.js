import { Calendar as ReactCalendar } from 'react-calendar';
import './Calendar.css';

const minDate = new Date();
const maxDate = new Date().setFullYear(minDate.getFullYear() + 1);

const Calendar = (props) => {
	const setDateHandler = (value) => {
		props.setCartObject((previous) => {
			return { ...previous, dateArray: value };
		});
	};

	const singleDayClickHandler = (value) => {
		props.setCartObject((previous) => {
			return { ...previous, dateArray: [value, value] };
		});
	};

	return (
		<section className='mt-5 text-sm md:text-base flex justify-center'>
			<ReactCalendar
				value={
					props.cartObject.dateArray.length
						? props.cartObject.dateArray
						: null
				}
				onChange={(value) => setDateHandler(value)}
				minDetail='month'
				minDate={minDate}
				maxDate={new Date(maxDate)}
				selectRange={true}
				onClickDay={(value) => singleDayClickHandler(value)}
			/>
		</section>
	);
};

export default Calendar;
