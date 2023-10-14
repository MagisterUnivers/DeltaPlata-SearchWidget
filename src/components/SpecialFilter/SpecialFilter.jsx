import { useState } from 'react';
import { Select } from '../Select/Select';
import {
	mockCountryFilter,
	mockSpecialFilterTags
} from '../../constants/mockData';
import { ReactComponent as Close } from '../../assets/svg/close.svg';
import './SpecialFilter.style.scss';

export const SpecialFilter = () => {
	const [checkedItems, setCheckedItems] = useState({});

	const handleCheckboxChange = (e) => {
		const { id, checked } = e.target;

		setCheckedItems({
			...checkedItems,
			[id]: checked
		});
	};

	// Вычисляем количество включенных чекбоксов
	const numberOfChecked = Object.values(checkedItems).filter(
		(isChecked) => isChecked
	).length;

	const handleRemoveAllFilter = () => {
		setCheckedItems({});
	};

	return (
		<div className="special-filter__container">
			<div className="special-filter__title-container">
				<h3 className="special-filter__title">Special Filter</h3>
				<p className="special-filter__title-amount">{numberOfChecked}</p>
			</div>
			<div className="special-filter__checkbox-wrapper">
				<ul className="special-filter__list">
					{mockSpecialFilterTags.map((e) => {
						const id = `checkbox-${e}`;
						return (
							<li className="special-filter__item" key={e}>
								<input
									className="special-filter__checkbox-item"
									type="checkbox"
									id={id}
									defaultChecked={false}
									checked={checkedItems[id]}
									onChange={(event) => {
										handleCheckboxChange(event);
									}}
								/>
								<p className="special-filter__checkbox-subtext">{e}</p>
							</li>
						);
					})}
				</ul>
			</div>
			{/* <div className="special-filter__scrollbar"></div> */}
			<button
				type="button"
				className="special-filter__button"
				onClick={() => handleRemoveAllFilter()}
			>
				<Close width={16} height={16} />
				Remove all filter
			</button>
			<div className="special-filter__country-filter">
				<h3 className="country-filter__title">Country Filter</h3>
				<Select type="country" data={mockCountryFilter} />
			</div>
		</div>
	);
};