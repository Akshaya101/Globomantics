import logo from './logo.jpg';
import './mainpage.css'
const Header = (props)=>
    (
        <header className="row">
            <div className="col-md-6">
                <img src={logo} className="logo" alt='logo-here'/>
            </div>
            <div className="col-md-6">
                <h1>{props.subtitle}</h1>
            </div>
        </header>
    );
export default Header;

