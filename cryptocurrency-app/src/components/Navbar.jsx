import React,{useState,useEffect} from 'react'
import { Button,Menu,Typography,Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BuildOutlined,FundOutlined,MenuOutlined, BulbOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'


const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () =>setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    // return () => window.removeEventListener('resize', handleResize);
    // here the return is used to take some action only when the components unmounts ie in this case it will never be unmounted
    // there is no use of the unmount as the navabar component will always be there in rendering
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  
  return (
    <div className='nav-container'>
        <div className="logo-container ">
            {/* this avatar is coming from antd */}
        <Avatar src={icon} size='large' />
        <Typography.Title level={2} className='logo'>
            <Link to="/">
                Cryptoverse 
            </Link>
        </Typography.Title>
          <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
          <MenuOutlined/>
          </Button>
        </div>
        {activeMenu && (
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
       
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
      )}
       
      
    </div>
  )
}

export default Navbar
