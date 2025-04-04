import DarkMode from './DarkMode'
import DropdownListMenu from './DropdownListMenu'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        {/* Logo */}
        <Logo />

        {/* Search */}
        <Search />

        {/* DarkMode & Profile */}
        <div className="flex items-center gap-4">
          <DarkMode />
          <DropdownListMenu />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
