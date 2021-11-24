import {HTagProps} from "./Htag.props";


export const Htag = ({tag, children}: HTagProps): JSX.Element => {
	return (
		<>
			<h1>{children}</h1>
		</>
	);
}