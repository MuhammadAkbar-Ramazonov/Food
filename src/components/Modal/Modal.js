import React from "react";

export const Modal = () => {
	return (
		<div
			class='modal fade'
			id='exampleModal'
			tabindex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'
		>
			<div class='modal-dialog'>
				<div class='modal-content position-relative'>
					<button
						type='button'
						class='btn-close position-absolute'
						data-bs-dismiss='modal'
						aria-label='Close'
					></button>
					<div class='modal-body'>
						<form>
							<input
								className='form-control'
								type='text'
								placeholder='Product name  '
							/>
							<input
								className='form-control'
								type='text'
								placeholder='Product bowls  '
							/>
							<input
								className='form-control'
								type='text'
								placeholder='Product price   '
							/>
							<input
								className='form-control'
								type='text'
								placeholder='Product category '
							/>
                            <select name="" id=""></select>
							<input className='form-control' type='file' placeholder='' />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
