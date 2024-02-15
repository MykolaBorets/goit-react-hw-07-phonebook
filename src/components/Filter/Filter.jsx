import css from './Filter.module.css';

export const Filter = ({ changeFilter }) => {
	return (
		<label htmlFor="filter" className={css.label}>
			Find contacts by name
			<input
				onChange={changeFilter}
				type="text"
				id="filter"
				name="filter"
				className={css.input}
			/>
		</label>
	);
};