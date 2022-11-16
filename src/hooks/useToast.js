import { useDispatch } from 'react-redux';
import { messageActions } from '../store/message-slice';

const useToast = () => {
	const dispatch = useDispatch();
	const pushToast = (message) => {
		dispatch(messageActions.addMessage(message));
		setTimeout(() => {
			dispatch(messageActions.shiftMessage());
		}, 3000);
	};
	return pushToast;
};

export default useToast;
