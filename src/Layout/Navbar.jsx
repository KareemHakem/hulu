import './StyleNavbar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import NavRow from './NavRow'

export default function Navbar() {
    return (
        <div className='flex_between'>
            <div className='flex_nav'> 
                <NavRow Icon={HomeIcon} text='home' className='home'/>
                <NavRow Icon ={WhatshotIcon} text='trend'/>
                <NavRow Icon ={SubscriptionsIcon} text="verified"/>
                <NavRow Icon ={TvIcon} text="collection"/>
                <NavRow Icon ={SearchIcon} text="search"/>
                <NavRow Icon ={PermIdentityIcon} text="Account"/>
            </div>
            <div className='logo'>Holo</div>
        </div>
        
    )
}
