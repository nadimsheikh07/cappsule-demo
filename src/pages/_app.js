import dynamic from "next/dynamic";
const ThemeProvider = dynamic(() => import("@/theme"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
