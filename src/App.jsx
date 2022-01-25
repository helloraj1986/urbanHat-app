// import CategorySection from './components/categorySection/CategorySection'
// import Hero from './components/hero/Hero'
import Navbar from './components/headerSection/navbar/Navbar'
import './app.css'
// import Review from './components/review/Review'
// import Footer from './components/footer/Footer'
//
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Footer from './components/footer/Footer'
import ProductDetail from './pages/producDetail/ProductDetail'
import ScrollToTop from './components/scrollToTop/ScrollToTop'


const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<ScrollToTop>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/products' exact component={Products} />
						<Route path='/products/category/:categoryId' exact component={Products} />
						<Route path='/products/:productId' exact component={ProductDetail} />
						<Route> 404 Not Found!</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	)
}

export default App
