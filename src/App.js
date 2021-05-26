import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthTemplate } from './templates/AuthTemplate/AuthTemplate'
import Login from './pages/Auth/Login'
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Homepage from './pages/Homepage/homepage'
import { AdminTemplate } from './templates/AdminTemplate/AdminTemplate';
import { CustomerTemplate } from './templates/CustomerTemplate/CustomerTemplate';
import HomeAdmin from './pages/Admin/HomeAdmin';
import FeedbackAdmin from './pages/Admin/FeedbackAdmin';
import MenuItemAdmin from './pages/Admin/MenuItemAdmin';
import Feedback1 from './pages/Feedback/feedback1';
import Feedback2 from './pages/Feedback/feedback2';
import OrderProcess from './pages/OrderProcess/orderprocess';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthTemplate exact path='/login' component={Login} />
        <AdminTemplate exact path='/admin' component={HomeAdmin} />
          <AdminTemplate exact path='/admin/dashboard' component={HomeAdmin} />
          <AdminTemplate exact path='/admin/feedback' component={FeedbackAdmin} />
          <AdminTemplate exact path='/admin/menuitem' component={MenuItemAdmin} />
        <UserTemplate exact path='/' component={Homepage} />
        <CustomerTemplate exact path='/customer' component={Homepage} />
        <Feedback1 exact path='/feedback1' component={Feedback1} />
        <Feedback2 exact path='/feedback2' component={Feedback2} />
        <OrderProcess exact path = '/orderprocess' component={OrderProcess} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
