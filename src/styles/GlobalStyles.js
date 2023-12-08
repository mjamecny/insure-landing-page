import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

:root {
  --color-dark-violet: hsl(256, 26%, 20%);
  --color-grayish-blue: hsl(216, 30%, 68%);
  --color-very-dark-violet: hsl(270, 9%, 17%);
  --color-dark-grayish-violet: hsl(273, 4%, 51%);
  --color-very-light-gray: hsl(0, 0%, 98%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family:  "Karla","DM Serif Display", sans-serif;
  color: var(--color-dark-grayish-violet);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

#root{
  position: relative;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`

export default GlobalStyles
