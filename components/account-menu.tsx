import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { useCurrentUser } from '../utils/queries';

const AccountMenu: FunctionComponent = function () {
  const router = useRouter();
  const { isLoading, data: userData } = useCurrentUser();

  return (
    <div className='card card-bleed border-bottom shadow-light-lg mb-6'>
      <div className='d-block collapse' id='sidenavCollapse'>
        <div className='card-body'>
          <ul className='card-list list text-gray-700'>
            <li
              className={`list-item ${
                router.pathname.includes('account/info') ? 'active' : ''
              }`}
            >
              <Link href='/account/info/' className='list-link text-reset'>
                General
              </Link>
            </li>
            <li
              className={`list-item ${
                router.pathname.includes('account/security') ? 'active' : ''
              }`}
            >
              <Link href='/account/security/' className='list-link text-reset'>
                Security
              </Link>
            </li>
            <li
              className={`list-item ${
                router.pathname.includes('account/subscription') ? 'active' : ''
              }`}
            >
              <Link
                href='/account/subscription/'
                className='list-link text-reset'
              >
                Mockoon Pro Subscription
              </Link>
            </li>
            {!isLoading &&
              (userData?.plan === 'TEAM' || userData?.plan === 'ENTERPRISE') &&
              userData?.teamRole === 'owner' && (
                <>
                  <h6 className='fw-bold text-uppercase mt-4 mb-3'>
                    Manage plan
                  </h6>
                  <li
                    className={`list-item ${
                      router.pathname.includes('account/users') ? 'active' : ''
                    }`}
                  >
                    <Link
                      href='/account/users/'
                      className='list-link text-reset'
                    >
                      Users
                    </Link>
                  </li>
                </>
              )}{' '}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
