import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route,Link,} from "react-router-dom";
import { Layout,Typography,Space } from 'antd';
import { Navbar,Homepage,Exchanges,CryptoDetails,Cryptocurrencies,News } from './components';


function App() {
  return (
  <BrowserRouter>
    <div className="app">
      <div className="navbar">
            <Navbar/>
      </div>            
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />} />
              </Routes>
              <Routes>
                <Route path="/exchanges" element={<Exchanges />} />
              </Routes>
              <Routes>
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              </Routes>
              <Routes>
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              </Routes>
              <Routes>
                <Route path="/news" element={<News/>} />
              </Routes>

            </div>  
          </Layout>
       
          <div className="footer">
            <Typography.Title level={5} style={{color:"white",textAlign:"center"}}>
              Cryptoverse<br/>
              All Right Reserved
              <br />
                <Space>
                  <Link to='/'>Home</Link>
                  <Link to='/exchanges'>Exchanges</Link>
                  <Link to='/news'>News</Link>

                  
                </Space>

            </Typography.Title>
          
          </div>
        </div>

        
      
     
    </div>

  </BrowserRouter>

  );
}

export default App;
