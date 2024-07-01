import { FC, useEffect, useState } from 'react';

type BannerProps = {
  message: string;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
};

const Banner: FC<BannerProps> = ({
  message,
  showBanner,
  setShowBanner,
}) => {
  const [show, setShow] = useState(showBanner);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setShowBanner(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [setShowBanner]);

  return (
    <div
      role="banner"
      data-cy="banner"
      className={`bg-red-400 border-red-500 rounded-md p-2 text-center ${show ? 'visible' : 'hidden'}`}
    >
      <p className="text-sm text-white">{message}</p>
    </div>
  );
};

export default Banner;
