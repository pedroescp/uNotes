import React from 'react';
import { LoginContainer } from '../components/login';
import { RegisterContainer } from '../components/register';

function Login() {
	const [checkedOne, setCheckedOne] = React.useState(false);

	const handleChangeOne = () => {
		setCheckedOne(!checkedOne);
	};
	return (
		<div className='flex justify-center items-center h-screen bg-slate-700'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<div className='card-body items-center text-center'>
					<div className='flex flex-row gap-8'>
						<label className='swap swap-flip text-xl'>
							<input
								type='checkbox'
								onClick={handleChangeOne}
								defaultChecked
							/>
							<h2
								className='swap-on tooltip tooltip-open tooltip-secondary tooltip-top mt-3'
								data-tip='Novo? Clique aqui!'
							>
								Entrar
							</h2>
							<h2 className='swap-off'>Registrar</h2>
						</label>
					</div>
					<div className='divider m-0'></div>
					<label className='swap swap-flip'>
						<input
							type='checkbox'
							checked={checkedOne}
							defaultChecked
						/>
						<div className='swap-off cursor-auto'>
							<LoginContainer />
						</div>
						<div className='swap-on cursor-auto'>
							<RegisterContainer />
						</div>
					</label>
				</div>
			</div>
		</div>
	);
}

export default Login;
