import AuthLayout, { authContainer, authItems } from './AuthLayout';
import { ReactComponent as MailSent } from '../../assets/svg/mail-sent.svg';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { motion } from 'framer-motion';
const ForgotPasswordSuccess = (props) => {
	return (
		<AuthLayout>
			<motion.div
				initial='hidden'
				animate='show'
				variants={authContainer}>
				<motion.figure variants={authItems}>
					<MailSent className='m-auto w-48 h-48 md:w-56 md:h-56' />
				</motion.figure>

				<motion.h1
					variants={authItems}
					className='text-3xl font-semibold'>
					Mail Sent
				</motion.h1>
				<motion.h2 variants={authItems} className='font-thin'>
					An email has been sent to
					<span className='font-semibold block break-words'>
						{props.email}
					</span>
					.
				</motion.h2>
				<motion.h2 variants={authItems} className='font-light text-sm'>
					Please feel free to contact us if you are having any
					difficulty signing in
				</motion.h2>
				<motion.div
					tabIndex='-1'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className='mt-2'
					variants={authItems}>
					<Link
						to='/login'
						type='button'
						title='Go to login'
						className='w-full md:w-4/5 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 focus:outline-1 focus:outline-independence-300 text-white py-2 px-4 rounded'>
						<p className='flex justify-center gap-1'>
							<ArrowLeft size={18} className='mr-1 my-auto' />
							Go to Login
						</p>
					</Link>
				</motion.div>
			</motion.div>
		</AuthLayout>
	);
};

export default ForgotPasswordSuccess;
