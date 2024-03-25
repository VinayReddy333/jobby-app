import {Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <ul className="un-order">
        <li>
          <Link to="/login">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
              alt="website logo"
              className="img"
            />
          </Link>
        </li>
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <h1>Jobs </h1>
          </Link>
        </li>
      </ul>
      <button className="butt" type="button" onClick={onClickLogout}>
        LogOut
      </button>
    </nav>
  )
}

export default Header
