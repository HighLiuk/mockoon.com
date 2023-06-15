import { useRouter } from 'next/router';
import { FunctionComponent, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useMutation } from 'react-query';
import AccountHeader from '../../components/account-header';
import AccountMenu from '../../components/account-menu';
import Meta from '../../components/meta';
import Spinner from '../../components/spinner';
import Layout from '../../layout/layout';
import { useAuth } from '../../utils/auth';
import { useCurrentTeam, useCurrentUser } from '../../utils/queries';

const meta = {
  title: 'My account - Users',
  description: 'Manage your Mockoon Cloud subscription users'
};

const planLabels = {
  FREE: 'Free',
  SOLO: 'Solo',
  TEAM: 'Team',
  ENTERPRISE: 'Enterprise'
};

const AccountUsers: FunctionComponent = function () {
  const router = useRouter();
  const auth = useAuth();
  const { isLoading, data: userData } = useCurrentUser();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const { data: teamData, refetch: teamRefetch } = useCurrentTeam(
    userData?.teamId,
    userData?.teamRole
  );

  useEffect(() => {
    if (
      !isLoading &&
      userData?.plan !== 'TEAM' &&
      userData?.plan !== 'ENTERPRISE'
    ) {
      router.push('/account/subscription/');
    }
  }, [isLoading, userData?.plan]);

  const {
    mutate: addUser,
    isError: isAddUserError,
    error: addUserError,
    isLoading: isAddingUser
  } = useMutation(
    async (email: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team`,
        {
          body: JSON.stringify({ email }),
          method: 'POST',
          headers: {
            Authorization: `Bearer ${await auth.getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }
    },
    {
      onError: (error) => {},
      onSuccess: (data) => {
        teamRefetch();
        setShowAddModal(false);
      }
    }
  );

  const {
    mutate: removeUser,
    isError: isRemoveUserError,
    error: removeUserError,
    isLoading: isRemovingUser
  } = useMutation(
    async (email: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team`,
        {
          body: JSON.stringify({ email }),
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${await auth.getIdToken()}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.status !== 204) {
        const data = await response.json();

        throw new Error(data.message);
      }
    },
    {
      onError: (error) => {},
      onSuccess: (data) => {
        teamRefetch();
      }
    }
  );

  return (
    <Layout footerBanner='download'>
      <Meta title={meta.title} description={meta.description} />

      <AccountHeader />

      <main className='pb-8 pb-md-11 mt-md-n6'>
        <div className='container-md'>
          <div className='row'>
            <div className='col-12 col-md-3'>
              <AccountMenu />
            </div>
            <Modal
              show={showAddModal}
              onHide={() => setShowAddModal(false)}
              centered
              scrollable={false}
            >
              <Modal.Header closeButton className='p-6'>
                <Modal.Title>Add a new user</Modal.Title>
              </Modal.Header>

              <Modal.Body className='p-6'>
                <div className='row g-3 justify-content-center '>
                  <div className='col-auto'>
                    <input
                      type='text'
                      id='user-email'
                      autoComplete='email'
                      className='form-control form-control-xs'
                      placeholder='Account email address'
                      onChange={(event) => {
                        setNewUserEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className='col-auto'>
                    <button
                      className='btn btn-xs btn-primary'
                      type='button'
                      onClick={() => {
                        if (newUserEmail) {
                          addUser(newUserEmail);
                        }
                      }}
                      disabled={isAddingUser}
                    >
                      Add
                    </button>
                  </div>
                </div>
                {isAddUserError && (
                  <p className='text-danger text-center mb-0 mt-2'>
                    {(addUserError as any)?.message}
                  </p>
                )}
              </Modal.Body>
            </Modal>
            <div className='col-12 col-md-9'>
              <div className='card card-bleed shadow-light-lg mb-6'>
                <div className='card-header'>
                  <div className='row align-items-center'>
                    <div className='col'>
                      <h4 className='mb-0'>
                        {planLabels[teamData?.plan]} plan users
                      </h4>
                      <small className='text-gray-700 ms-auto'>
                        Need more seats? Contact us at{' '}
                        <a href='mailto:support@mockoon.com'>
                          support@mockoon.com
                        </a>
                      </small>
                    </div>
                    <div className='col-auto'>
                      {isLoading ? (
                        <Spinner />
                      ) : (
                        <small
                          className={
                            teamData?.members.length >= teamData?.seats
                              ? 'text-danger'
                              : 'text-gray-700'
                          }
                        >
                          {teamData?.members.length}/{teamData?.seats} seats
                        </small>
                      )}
                    </div>
                    <div className='col-auto'>
                      <button
                        className={`btn btn-xs btn-primary ${
                          teamData?.members.length >= teamData?.seats
                            ? 'disabled'
                            : ''
                        }`}
                        type='button'
                        onClick={() => setShowAddModal(true)}
                      >
                        Add user
                      </button>
                    </div>
                  </div>
                </div>
                <div className='card-body'>
                  <div className='list-group list-group-flush'>
                    {isLoading ? (
                      <Spinner />
                    ) : (
                      teamData?.members.map((member, memberIndex) => {
                        return (
                          <div
                            key={`member${memberIndex}`}
                            className='list-group-item'
                          >
                            <div className='row align-items-center'>
                              <div className='col-6'>
                                <p className='mb-0'>
                                  {member.email}{' '}
                                  {member.uid === auth.user?.uid && '(you)'}
                                  <span
                                    className={`badge rounded-pill ms-4 ${
                                      member.role === 'owner'
                                        ? 'bg-primary-soft'
                                        : 'bg-secondary-soft'
                                    }`}
                                  >
                                    <span className='h6 text-uppercase fw-bold'>
                                      {member.role}
                                    </span>
                                  </span>
                                </p>
                              </div>
                              {member.uid !== auth.user?.uid && (
                                <div className='col-auto ms-auto'>
                                  <button
                                    className={`btn btn-xs btn-danger`}
                                    onClick={() => removeUser(member.email)}
                                    disabled={isRemovingUser}
                                  >
                                    Remove
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AccountUsers;
