import { useRouter } from 'next/router';
import Script from 'next/script';
import { FunctionComponent } from 'react';

const PaddleScript: FunctionComponent = function () {
  const router = useRouter();

  return (
    <Script
      src='https://cdn.paddle.com/paddle/v2/paddle.js'
      onLoad={() => {
        if (process.env.NODE_ENV === 'development') {
          // @ts-ignore
          Paddle.Environment.set('sandbox');
        }

        // @ts-ignore
        Paddle.Setup({
          seller: parseInt(process.env.NEXT_PUBLIC_PADDLE_SELLER_ID),
          pwAuth: process.env.NEXT_PUBLIC_PADDLE_RETAIN_AUTH,
          eventCallback: function (data) {
            if (data.name === 'checkout.completed') {
              setTimeout(() => {
                router.push('/account/subscription/');
              }, 3000);
            }
          }
        });
      }}
    />
  );
};

export default PaddleScript;
