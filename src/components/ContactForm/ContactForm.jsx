
import { useState, useMemo, memo, useCallback } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const INITIAL_STATE = {
	name: '',
	number: '',
  };


  const ContactForm = ({ onSubmit }) => {
	const [state, setState] = useState({ ...INITIAL_STATE });

	const handleChange = useCallback(({ target }) => {
		const { name, value } = target;
		setState(prevState => ({ ...prevState, [name]: value }));
	  }, []);

	  const handleSubmit = evt => {
		evt.preventDefault();
		onSubmit({ ...state });
		reset();
	  };

	  const reset = useCallback(() => {
		setState({ ...INITIAL_STATE });
	  }, []);
	
	  const nameID = useMemo(() => nanoid(), []);
	  const numberID = useMemo(() => nanoid(), []);
	
	  const { name, number } = state;

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<label htmlFor="name" className={css.label}>
				Name
				<input
					className={css.input}
					value={name}
					type="text"
					name="name"
					id={nameID}
					onChange={handleChange}
					required
				/>
			</label>
			<label htmlFor="number" className={css.label}>
				Number
				<input
					className={css.input}
					value={number}
					type="tel"
					name="number"
					id={numberID}
					onChange={handleChange}
					required
				/>
			</label>
			<button className={css.btn} type="submit">
				Add contact
			</button>
		</form>
	);
};

export default memo(ContactForm);