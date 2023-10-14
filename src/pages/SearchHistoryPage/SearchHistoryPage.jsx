import { Title } from '../../components/Title/Title';
import { DateFilter } from '../../components/DateFilter/DateFilter';
import { Button } from '../../components/Button/Button';
import { mockSearchHistory } from '../../constants/mockData';
import { tableCellsName } from '../../constants/tablecells';
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg';
import '../../components/Section/Section.style.scss';
import './SearchHistoryPage.style.scss';
import '../WelcomePage/WelcomePage.style.scss';

export const SearchHistoryPage = () => {
	return (
		<section className="section" aria-label="search history section">
			<div className="container no-flex">
				<div className="hero-title__container push-content">
					<Title text="History" />
					<DateFilter />
					<Button text="Clear all history" />
				</div>
				<div className="horizontal-line push-content" />
				<div className="table-flex">
					<div className="table">
						<h2 className="table-date">25 July, 2023</h2>
						<table className="table-base">
							<thead>
								<tr>
									{tableCellsName?.map((category) => {
										return <th key={category}>{category}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{mockSearchHistory
									.filter((item) => item.date === '2023-07-25')
									.map((item) => (
										<tr key={item.number}>
											<td className="table-subtext underline">{item.name}</td>
											<td className="table-subtext">{item.type}</td>
											<td className="table-subtext">{item.number}</td>
											<td className="table-subtext">{item.time}</td>
											<td className="table-link__item">
												<p className="table-subtext__link">Search again</p>
												<ArrowRight width={16} height={16} />
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
					<div className="table">
						<h2 className="table-date">24 July, 2023</h2>
						<table className="table-base">
							<thead>
								<tr>
									{tableCellsName?.map((category) => {
										return <th key={category}>{category}</th>;
									})}
								</tr>
							</thead>
							<tbody>
								{mockSearchHistory
									.filter((item) => item.date === '2023-07-24')
									.map((item) => (
										<tr key={item.number}>
											<td className="table-subtext underline">{item.name}</td>
											<td className="table-subtext">{item.type}</td>
											<td className="table-subtext">{item.number}</td>
											<td className="table-subtext">{item.time}</td>
											<td className="table-link__item">
												<p className="table-subtext__link">Search again</p>
												<ArrowRight width={16} height={16} />
											</td>
										</tr>
									))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
};
