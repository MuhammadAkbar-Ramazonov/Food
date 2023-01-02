import React, { useRef } from "react";
import { ModalImg } from "../../assets/images/icons/icons";
import "./modal.scss";
export const Modal = () => {
	const name = useRef();
	const price = useRef();
	const bowls = useRef();
	const category_id = useRef();
	const food_img = useRef();

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
					<div className='modal-heading-wrapper'>
						<h3 className='modal-title'>Add new product item to list</h3>
						<button
							type='button'
							class='modal-close-btn btn-close position-absolute'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div>
						<form
							onSubmit={(evt) => {
								evt.preventDefault();
								const newFormData = new FormData();

								newFormData.append("name", name.current.value);
								newFormData.append("price", price.current.value);
								newFormData.append("bowls", bowls.current.value);
								newFormData.append("category_id", category_id.current.value);
								newFormData.append("food_img", food_img.current.files[0]);
								console.log(food_img.current);
								(async function () {
									try {
										const res = await fetch(`http://localhost:5000/food`, {
											method: "Post",
											body: newFormData,
										});
										console.log(res);
										alert(res.ok);
									} catch (error) {
										console.log(error);
										alert(error);
									}
								})();
							}}
							className='modal-form'
						>
							<input
								ref={name}
								className='modal-form-input form-control'
								name='name'
								type='text'
								placeholder='Product name'
							/>
							<input
								ref={price}
								className='modal-form-input form-control'
								name='price'
								type='text'
								placeholder='Product price'
							/>
							<input
								ref={bowls}
								className='modal-form-input form-control'
								type='text'
								name='bowls'
								placeholder='Product bowls'
							/>
							<select
								ref={category_id}
								name='category_id'
								className=' modal-form-select  form-control'
							>
								<option selected>Product category </option>
								<option value='1'>Hot Dishes</option>
								<option value='2'>Cold Dishes</option>
								<option value='3'>Soup</option>
								<option value='4'>Grill</option>
								<option value='5'>Appetizer</option>
								<option value='6'>Dessert</option>
							</select>
							<label>
								<div className='modal-img'>
									<ModalImg />
									<p className='modal-img-text'>
										Click or drag file to this area to upload
									</p>
									<p className='modal-img-desc'>
										Support for a single or bulk upload.
									</p>
								</div>
								<input
									ref={food_img}
									name='food_img'
									className='visually-hidden'
									type='file'
									placeholder=''
								/>
							</label>
							<div className='modal-btns'>
								<button className='modal-btns-cancel'>Cancel</button>
								<button className='modal-btns-add'>Add</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
