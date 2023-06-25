const SizeChart = (props) => {
	const sizechangeHandler = (event) => {
		props.onSelect((previous) => {
			return {
				...previous,
				size: event.target.value,
				dateArray: [],
				deliverAt: null,
				returnBy: null,
			};
		});
		props.setShowErrorMessage((prev) => {
			for (let key in prev) prev[key].isVisible = false;
			return prev;
		});
	};

	return (
		<section className='mt-3 rounded-xl bg-silver-pink-100 p-2 md:px-6 md:py-2'>
			<ul className='grid grid-cols-4 gap-4 text-center'>
				{props.availableSizes.map((item) => {
					return (
						<li key={item.id}>
							<input
								onChange={sizechangeHandler}
								id={`size-${item.display_name}`}
								type='radio'
								name='product-size'
								defaultValue={item.display_name}
								className='sr-only peer'
							/>
							<label
								htmlFor={`size-${item.display_name}`}
								className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
								{item.display_name}
							</label>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default SizeChart;
