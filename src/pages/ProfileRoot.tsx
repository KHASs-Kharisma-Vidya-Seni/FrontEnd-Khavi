import Container from '@/components/Container';
import { useSWRConfig } from 'swr';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { makeRequest } from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/use-auth';
import { useEffect } from 'react';

export default function ProfileRoot() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mutate } = useSWRConfig();

  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser || currentUser === null) {
      navigate('/login', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleLogout = async () => {
    try {
      toast.promise((makeRequest.get('/auth/logout'), mutate('/auth/logout', undefined, false)), {
        success: 'Logout Succes.....',
      });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div>
      <Container className="flex w-full  justify-between overflow-y-hidden py-10">
        <div className="flex h-full w-3/12 flex-col justify-between">
          <div id="main-side" className="static w-4/6 border-r">
            <h1 className="pb-6 text-2xl font-bold">User Profile</h1>
            <ul className="space-y-3">
              {['user-info', 'bookmark', 'settings'].map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={`/profile/${menu}`}
                    className={({ isActive }) =>
                      twMerge([
                        'text-gray-400',
                        (isActive || (location.pathname === '/profile' && menu === 'user-info')) && 'text-blue-600',
                      ])
                    }
                  >
                    {menu.replace('-', ' ').toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div id="auth" className="py-20">
              <Button onClick={handleLogout} variant="logout">
                Logout
              </Button>
            </div>
          </div>
        </div>
        <div className="h-full w-9/12 ">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
