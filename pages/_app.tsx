// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css'; // Import your global Tailwind CSS
import 'swiper/css'; // Import Swiper core styles
import 'swiper/css/pagination'; // Import Swiper pagination styles

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;