import './Loading.css';

const LoaderIcon = (props) => (
	<div
		className={`loader-icon mx-auto ${props.className || ''}`}
		style={{
			width: props.size ? props.size : 32,
			height: props.size ? props.size : 32,
		}}
	/>
);

export default LoaderIcon;
