/** @type {import('tailwindcss').Config} */

// const colors=require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, // agar purana wala bhi colors use karna h too extend ke {} ke under apne primary ye jo bhi colors ho likhenge
    // colors:{
    //   primary:{
    //     light:"rgb(243,48,98)",
    //     dark:"rgb(345,134,354)"
    // },
    // green:colors.green["600"],
    // }
  },
  plugins: [],
}
