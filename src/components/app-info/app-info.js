import './app-info.css'

const AppInfo = ({allMovieCount, allFavouriteMovieCount}) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMovieCount}</p>
			<p className='fs-4 text-uppercase'>Sevimli kinolar: {allFavouriteMovieCount}</p>
		</div>
	)
}

export default AppInfo
