import { dispatchBulkActions } from './Common';

const LoginSuccess = (batch, dispatch, response) => {
	dispatchBulkActions(batch, dispatch, response);
	typeof Storage &&
		localStorage.getItem('cartContents') &&
		localStorage.removeItem('cartContents');

	typeof Storage &&
		localStorage.getItem('wishlistContents') &&
		localStorage.removeItem('wishlistContents');
};

export default LoginSuccess;
