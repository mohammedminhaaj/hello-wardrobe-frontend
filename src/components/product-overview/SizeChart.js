const SizeChart = (props) => {
	const sizechangeHandler = (event) => {
		props.onSelect((previous) => {
			return { ...previous, size: event.target.value };
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
								id={`size-${item.name}`}
								type='radio'
								name='product-size'
								defaultValue={item.name}
								className='sr-only peer'
							/>
							<label
								htmlFor={`size-${item.name}`}
								className='hover:bg-silver-pink-200 focus:outline-silver-pink-300 active:ring-1 active:ring-silver-pink-300 rounded-full py-1 px-3 cursor-pointer peer-checked:text-isabelline-100 peer-checked:bg-silver-pink-300'>
								{item.name}
							</label>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default SizeChart;
