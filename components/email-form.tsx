import { FunctionComponent } from 'react';

// mailchimp groups fields names
const groups = {
  newsletter: 'group[302881][1]',
  productpreview: 'group[302881][2]'
};

const EmailForm: FunctionComponent<{ formType: keyof typeof groups }> =
  function ({ formType }) {
    return (
      <div className='row align-items-center text-lg-start text-center'>
        {formType === 'newsletter' && (
          <div className='col-12 col-lg-7'>
            <h4 className='mb-1 fw-bold text-gray-700'>
              Get our stories delivered
            </h4>

            <p className='fs-lg text-muted mb-4 mb-lg-0'>
              Enter your email address to receive Mockoon's latest updates
            </p>
          </div>
        )}
        <div
          className={`col-12 ${
            formType === 'newsletter' ? 'col-lg-5' : ''
          } justify-content-end`}
        >
          <form
            action='https://mockoon.us17.list-manage.com/subscribe/post?u=a8822ec82cbe40c6dc5564bd4&amp;id=e054c8a3a4'
            method='post'
            target='_blank'
            noValidate
          >
            <div className='input-group'>
              <input
                className='form-control'
                type='email'
                id='newsletter-email'
                name='EMAIL'
                placeholder='Email address'
              />
              <input
                style={{ display: 'none' }}
                aria-hidden='true'
                type='checkbox'
                name={groups[formType]}
                value='1'
                checked
                readOnly
                tabIndex={-1}
              ></input>
              <button className='btn btn-primary-soft' type='submit'>
                {formType === 'newsletter' ? 'Subscribe' : "I'm interested!"}
              </button>
            </div>
            {formType === 'productpreview' && (
              <p className='text-muted text-center h6 pt-2'>
                Your email will not be shared or used for any other purpose.
              </p>
            )}
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden='true'
            >
              <input
                type='text'
                name='b_a8822ec82cbe40c6dc5564bd4_e054c8a3a4'
                tabIndex={-1}
              />
            </div>
          </form>
        </div>
      </div>
    );
  };

export default EmailForm;
