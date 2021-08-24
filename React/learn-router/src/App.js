import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Product from './pages/Product';
import Login from './pages/Login';

// '/' render Home
// '/contact' render ContactUs
// '/product' render Product
function App() {
  return (
    <div style={{ padding: '4rem' }}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/*  ถ้าใช้ a tag มันจะรีเรนเดอร์หน้าใหม่ทั้งหมด */}
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <Link to="/CONTACT/">Contact Us</Link>
          </li>
          <li>
            <Link to="/product/4">Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <Switch>
          {/* ถ้าไม่ใส่ Switch มันจะเรนเดอร์ทุกอันที่ Match ออกมา เจอแล้วหาต่อ ถ้าใส่  Switch เวลาแมชแล้วจะ ไม่ไปทำอันถัดไป*/}
          <Route path="/contact" component={ContactUs} />
          {/* เขียนอีกแบบเหมาะสำหรับกรณีที่มีส่งค่า Props ไปใช้งานต่อ */}
          <Route path="/contact" render={props => <ContactUs {...props} />} />
          {/*  path ใน Route เป็น case insensitive ไม่ว่าจะเป็นตัวพิมเล็กหรือใหญ่มีค่าเท่ากัน */}
          <Route path="/product/:id" component={Product} />
          <Route path="/login" component={Login} />
          {/* exact Path มันจะทำการเทียบ path ทุกตัวอักษรไม่ใช่ แค่ที่ละตัว*/}
          {/* ถ้าใส่แบบไม่มี exact จะทำให้มันป้องกันกรณีที่มันไม่เจอ path ได้มันจะทำไปที่ /  ให้เลย */}
          {/* Path /  มัน Match กับทุก Url เลยนิยมใส่ไว้ล่าสุด */}
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
