import Header from './header';
import Sidebar from './sidebar';
import DashboardProvider from '@/providers/dashboar-provider';

const Navbar = () => {

  return (
    <DashboardProvider>
      <Header />
      <Sidebar />
    </DashboardProvider>
  )
}

export default Navbar