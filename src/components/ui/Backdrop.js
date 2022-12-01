const Backdrop = (props) => {
	return (
		<div
			onClick={props.onClose}
			className='fixed top-0 left-0 right-0 bottom-0 z-30 w-full h-auto backdrop-blur-sm'
		/>
	);
};

export default Backdrop;
