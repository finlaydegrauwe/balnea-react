import { Link } from 'react-router-dom';
import BlobLogo from './blob-logo.svg'

function Header() {
  return (
    <ul className="header">
      <li><Link to="/"><img alt="logo" src={BlobLogo} height="40px" width="40px"/></Link></li>
      {/* <li>Home</li>
      <li>About</li> */}
      <Link to="blob/over"><li style={{float:"right"}}>Over</li></Link>
    </ul>
  );
}

export default Header;
