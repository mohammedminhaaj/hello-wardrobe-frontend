import { motion } from 'framer-motion';

const errorMessageVariant = {
	visible: {
		x: [-5, 5, -5, 5, -5, 5, -5, 5, -5, 5, 0],
		transition: {
			duration: 0.3,
		},
	},
};

const ErrorMessage = (props) => (
	<motion.div
		variants={errorMessageVariant}
		initial='visible'
		animate='visible'
		className='text-xs text-silver-pink-300'>
		{props.errorMessage}
	</motion.div>
);
export default ErrorMessage;
