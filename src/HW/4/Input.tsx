import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (s: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
	handleSave: () => void
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(event.currentTarget.value)	};

	return (
	  <input onKeyUp={event => {
		  if (event.key === 'Enter') {
			  props.handleSave()
		  }
	  }} id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
