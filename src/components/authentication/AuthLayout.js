import { motion } from 'framer-motion';
import Background from '../../assets/svg/login-background.svg';

const authLayoutContainer = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3 },
	},
};

export const authContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const authItems = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

const AuthLayout = (props) => {
	return (
		<main>
			<div
				className='w-screen h-screen blur-sm fixed -z-10'
				style={{
					backgroundImage: `url('${Background}')`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundColor: '#F2E9E4',
				}}
			/>
			<section className='flex justify-center align-middle w-screen h-screen text-space-cadet-300 overflow-x-hidden'>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={authLayoutContainer}
					className='bg-isabelline-100 rounded-xl m-10 p-5 w-full md:w-2/5 text-center h-fit shadow-2xl'>
					{props.children}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						className='text-sm font-thin mt-5'>
						Privacy Policy | Terms & Conditions
					</motion.p>
				</motion.div>
			</section>
		</main>
	);
};

export default AuthLayout;
