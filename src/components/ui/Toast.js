import { X } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { messageActions } from '../../store/message-slice';
import { AnimatePresence, motion } from 'framer-motion';

const Toast = () => {
	const messages = useSelector((state) => state.message.messageArray);
	const dispatch = useDispatch();
	return (
		<section className='flex justify-center'>
			<div className='fixed w-4/6 md:w-3/5 top-16 md:top-20 z-50 text-white font-thin'>
				<div className='flex flex-col gap-2 flex-nowrap'>
					<AnimatePresence>
						{messages.map((item, index) => (
							<motion.div
								initial={{ opacity: 0, y:-20 }}
								animate={{ opacity: 1, y:0 }}
								exit={{ opacity: 0, y:-20 }}
								key={index}
								transition={{ type: "spring", stiffness: 100 }}
								className='flex justify-between bg-silver-pink-300 rounded px-6 py-3'
								whileHover={{ opacity: 0.7 }}>
								{item}
								<X
									onClick={() =>
										dispatch(
											messageActions.removeMessage(index)
										)
									}
									className='my-auto cursor-pointer flex-shrink-0'
									size={16}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Toast;
