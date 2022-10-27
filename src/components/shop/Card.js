const Card = (props) => {
	return (
		<a href={props.linkTo} className='group'>
			<div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-isabelline-100 xl:aspect-w-7 xl:aspect-h-8'>
				<img
					src={props.imageMeta.src}
					alt={props.imageMeta.alt}
					className='h-full w-full object-cover object-center group-hover:opacity-75'
				/>
			</div>
			<h3 className='mt-4 text-sm text-h-gray-300'>{props.title}</h3>
			<p className='mt-1 text-lg font-medium text-independence-300'>
				₹{props.price}
			</p>
		</a>
	);
};

export default Card;
