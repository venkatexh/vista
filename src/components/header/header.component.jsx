import React from 'react'
import './header.styles.scss'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link to='/' className='logo-container'>
			<Logo className='logo'/>
		</Link>
		<div className='options'>
			<Link to='/shop' className='option'>SHOP</Link>
			{
				currentUser ?
					<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
					: <Link to='/signin' className='option'>SIGN IN</Link>
			}
			<CartIcon />
		</div>
			{
				hidden ? 
					null
					: <CartDropdown />
			}
	</div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
})

export default connect(mapStateToProps)(Header)