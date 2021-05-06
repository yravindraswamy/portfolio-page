import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

// Write your code here
// const NavBar = props => {
//   const {selectedSection, changeSelectedSection} = props
//   return (
//     <nav className="nav-bar">
//       <img
//         src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
//         alt="profile"
//       />
//       <ul className="nav-items-container">
//         {navBarItems.map(eachItem => {
//           const {id, iconUrl, name} = eachItem

//           const onClickNavItem = () => {
//             changeSelectedSection(eachItem.name)
//           }

//           return (
//             <li
//               key={id}
//               onClick={onClickNavItem}
//               className="nav-item nav-item-container"
//             >
//               <img src={iconUrl} alt={name} className="nav-icon" />
//               <h1 className="nav-text">{name}</h1>
//             </li>
//           )
//         })}
//       </ul>
//     </nav>
//   )
// }

const NavItem = props => {
  const {id, iconUrl, name} = props
  console.log(id)
  console.log(iconUrl)
  console.log(name)
  return (
    <li>
      <img src={iconUrl} alt={name} />
      <h1>{name}</h1>
    </li>
  )
}

const NavBar = () => (
  <nav>
    <ul>
      {navBarItems.map(eachItem => (
        <NavItem eachItem={eachItem} />
      ))}
    </ul>
  </nav>
)

export default NavBar
