import React, { Component } from 'react';

const EventModal = props =>
	<div>
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault();
				props.addEvent();
				props.closeModal();
			}}
		>
			<div className="add-fields">
				<div>
					<input
						placeholder="Date"
						type="date"
						name="date"
						id="date"
						value={props.date}
						onChange={props.updateFieldValue}
					/>
				</div>
				<div>
					<input
						placeholder="Guest of Honor"
						type="text"
						name="speaker"
						id="speaker"
						size="22"
						value={props.speaker}
						onChange={props.updateFieldValue}
					/>
				</div>
			</div>
			<div>
				<input className="submit-button" type="submit" value="submission" />
			</div>
		</form>
	</div>;

export default EventModal;
