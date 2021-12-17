module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bghome:
          "linear-gradient(to left,lime 25%, red 25% 50%, cyan 50% 75%, yellow 75% )",
      },
      backgroundImage: (theme) => ({
        bghome:
          "linear-gradient(to left,lime 25%, red 25% 50%, cyan 50% 75%, yellow 75% )",
        bgcontact:
          "linear-gradient(110deg, rgba(17,17,17,1) 58%, rgba(251,91,15,1) 58%)",
        bgprojects:
          "linear-gradient(35deg,rgba(17,17,17,0.7) 10%,rgba(251,91,15,0.7)  90%)",
        bgskills:
          "linear-gradient(35deg,rgba(251,91,15,0.7) 10%, rgba(17,17,17,0.7) 90%)",
        "free-bg":
          "url('https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg')",
        "mobile-bg":
          "url('https://content-tooling.spotifycdn.com/images/af63e367-ad10-4063-a8e2-5a50ae2a4b28_lie_circles-mobile.svg')",
      }),
    },
  },
  plugins: [],
};
