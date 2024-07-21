/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/src/**/*.{html,js}",
    "index.html",
    "appointment-time.html",
    "template.html",
    "device-type.html",
    "damage-type.html",
    "device-details.html",
    "customer-details.html",
    "store-terms-conditions.html",
    "store-privacy-policy.html",
    "confirmation.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"SFProDisplay"'],
    },
  },
  plugins: [],
};
