import React from 'react';
import NavLink from "./NavLink"
import ContactLinks from "./ContactLinks"
import NavigationLinks from "./NavLinks"
import "./Header.scss"
import MobileMenu from './MobileMenu';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {showMenu: false};
  }

  handleClick(showMenu) {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    const navLinks = NavigationLinks;
    const listItems = navLinks.map((navLinks) =>
      <NavLink name={navLinks} key={navLinks.displayName} />
    );
    const contactLinks = ContactLinks;
    const contactItems = contactLinks.map((contactLinks) =>
      <NavLink name={contactLinks} key={contactLinks.displayName} />
    );

    const menuLink = <button onClick={(showMenu) => this.handleClick(showMenu)}><i className="material-icons-round">menu</i></button>

    const menuButton = <li className="NavLink NavMenu">
      {menuLink}
    </li>;

    return (
      <nav >
        <div className="Nav section">
          <div className="container">
            <div className="content">
              <ul className="NavLeft">
                {contactItems}
              </ul>
              <ul className="NavRight">
                {listItems}
                {menuButton}
              </ul>
            </div>
          </div>
        </div>
        <UpdateMobileMenu showMenu={this.state.showMenu} />
      </nav>
    );
  }
}

function UpdateMobileMenu(props) {
  const menuDisplay = props.showMenu;
  return (<MobileMenu menuHidden={menuDisplay}/>)
}

export default Header;






// function Header() {
//   const navLinks = NavigationLinks;
//   const listItems = navLinks.map((navLinks) =>
//     <NavLink name={navLinks} />
//   );
//   const contactLinks = ContactLinks;
//   const contactItems = contactLinks.map((contactLinks) =>
//     <NavLink name={contactLinks} />
//   );
//
//   function handleClick() {
//     console.log('Click happened');
//   }
//
//   const menuLink = <a onClick={() => handleClick()}><i class="material-icons-round">menu</i></a>
//
//   const menuButton = <li className="NavLink NavMenu">
//     {menuLink}
//   </li>;
//
//   return (
//     <nav >
//       <div className="Nav section">
//         <div className="container">
//           <div className="content">
//             <ul className="NavLeft">
//               {contactItems}
//             </ul>
//             <ul className="NavRight">
//               {listItems}
//               {menuButton}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <MobileMenu />
//     </nav>
//   );
// }
//
// export default Header;
