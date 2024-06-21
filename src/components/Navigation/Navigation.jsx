import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import clsx from "clsx"

const getClassNames = ({isActive}) => {
                  return clsx(css.link, isActive && css.isActive)
}


const Navigation = () => {
  return (
    <header>
          <nav>
              <NavLink className={getClassNames} to='/'>Home</NavLink>
              <NavLink className={getClassNames} to='/movies'>Movies</NavLink>
      </nav>
    </header>
  )
}

export default Navigation
