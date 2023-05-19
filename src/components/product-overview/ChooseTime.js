import { Fragment } from 'react';

const ChooseTime = (props) => {
	const onChangeHandler = (event) => {
		event.target.id === 'deliver-around'
			? props.setCartObject((prev) => {
					return { ...prev, deliverAt: event.target.value };
			  })
			: props.setCartObject((prev) => {
					return { ...prev, returnBy: event.target.value };
			  });
	};

	return (
		<Fragment>
			<section className='flex flex-wrap gap-2 text-sm justify-around items-center mt-3'>
				<section>
					<label htmlFor='deliver-around' className='block'>
						Deliver Around:
					</label>
					<select
						onChange={onChangeHandler}
						defaultValue={props.cartObject.deliverAt}
						id='deliver-around'
						className='py-2 px-2 bg-isabelline-200 focus:outline-isabelline-300 rounded'>
						<option value=''>Please select a time</option>
						<option value='9AM to 12PM'>9AM to 12PM</option>
						<option value='12PM to 3PM'>12PM to 3PM</option>
						<option value='3PM to 6PM'>3PM to 6PM</option>
						<option value='6PM to 9PM'>6PM to 9PM</option>
					</select>
				</section>
				<section>
					<label htmlFor='return-at' className='block'>
						Return By:
					</label>
					<select
						onChange={onChangeHandler}
						defaultValue={props.cartObject.returnBy}
						id='return-at'
						className='py-2 px-2 bg-isabelline-200 active:ring-1 active:ring-isabelline-300 focus:outline-isabelline-300 rounded'>
						<option value=''>Please select a time</option>
						<option value='9AM to 12PM'>9AM to 12PM</option>
						<option value='12PM to 3PM'>12PM to 3PM</option>
						<option value='3PM to 6PM'>3PM to 6PM</option>
						<option value='6PM to 9PM'>6PM to 9PM</option>
					</select>
				</section>
			</section>
			<article className='text-left md:text-center text-sm mt-3'>
				{props.cartObject.dateArray.length &&
				props.cartObject.deliverAt &&
				props.cartObject.returnBy ? (
					<p className='font-thin'>
						Your product will be delivered on
						<span className='font-medium'>
							{' '}
							{props.cartObject.dateArray[0].toDateString()}
						</span>{' '}
						around
						<span className='font-medium'>
							{' '}
							{props.cartObject.deliverAt}
						</span>{' '}
						and should be returned by
						<span className='font-medium'>
							{' '}
							{props.cartObject.dateArray[1].toDateString()}
						</span>{' '}
						around
						<span className='font-medium'>
							{' '}
							{props.cartObject.returnBy}
						</span>
					</p>
				) : (
					<Fragment>
						<p className='font-thin'>
							Multiple consecutive days can be selected by
							clicking on the start and end dates respectively
						</p>
						<p>
							Note: Product is available only on the dates which
							are not grayed out.
						</p>
					</Fragment>
				)}
			</article>
		</Fragment>
	);
};

export default ChooseTime;
