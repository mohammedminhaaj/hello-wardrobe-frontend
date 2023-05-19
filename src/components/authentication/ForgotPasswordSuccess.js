import AuthLayout from './AuthLayout';
import { ReactComponent as MailSent } from '../../assets/svg/mail-sent.svg';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
const ForgotPasswordSuccess = (props) => {
	return (
		<AuthLayout>
			<MailSent className='m-auto w-48 h-48 md:w-56 md:h-56' />
			<h1 className='text-3xl font-semibold'>Mail Sent</h1>
			<h2 className='font-thin'>
				An email has been sent to
				<span className='font-semibold block break-words'>
					{props.email}
				</span>
				.
			</h2>
			<h2 className='font-light text-sm'>
				Please feel free to contact us if you are having any difficulty
				signing in
			</h2>
			<Link
				to='/login'
				type='button'
				title='Go to login'
				className='w-full md:w-4/5 mt-2 bg-independence-100 hover:bg-independence-200 active:ring-1 active:ring-independence-300 disabled:ring-0 disabled:hover:bg-independence-100 text-white py-2 px-4 rounded'>
				<p className='flex justify-center gap-1'>
					<ArrowLeft size={18} className='mr-1 my-auto' />
					Go to Login
				</p>
			</Link>
		</AuthLayout>
	);
};

export default ForgotPasswordSuccess;
