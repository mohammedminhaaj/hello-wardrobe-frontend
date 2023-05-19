export const handleError = (
	errorContext,
	toast,
	setError,
	excludeFields = []
) => {
	toast(errorContext.message);

	let excludeFieldsArray = ['non_field_errors', 'detail', ...excludeFields];

	if (errorContext.errors) {
		for (let key in errorContext.errors) {
			if (excludeFieldsArray.includes(key)) {
				toast(errorContext.errors[key]);
			} else {
				!!setError &&
					setError(
						key,
						{
							type: 'custom',
							message: errorContext.errors[key],
						},
						{ shouldFocus: true }
					);
			}
		}
	}
};
