import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {

	font-size: 16px;

	/* colors */
	--wsiw-grey-intense: #1D2937;
	--wsiw-grey-medium: #2A3949;
  --wsiw-grey-normal: #556B86;
  --wsiw-red: #F97575;
  --wsiw-yellow: #FACF5A;
	--wsiw-green: #71E4A9;

	/* sizes */
	--size-1x: 10px;
	--size-2x: 20px;
	--size-3x: 30px;
	--size-4x: 40px;
	--size-5x: 50px;
	--size-10x: 100px;
	--size-15x: 150px;
	--size-20x: 200px;
}

* {
	box-sizing: border-box;
	margin: 0;
	outline: 0;
	padding: 0;
}

body {
	background: var(--wsiw-grey-intense);
	color: var(--wsiw-yellow);
	font-family: 'Josefin Sans', sans-serif;
}

button {
	cursor: pointer;
}

#info {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

#root { display: none; }

@media only screen and (max-width: 600px) {

	#info { display: none; }

	#root { display: block; }

	div[id^="page-"] h1 { font-size: 24px; }

	div[id^="page-"] h2 { font-size: 18px; }

	div[id^="page-"] p { font-size: 14px; }

	div.wsiw-container {
		margin-bottom: var(--size-4x);
		margin-top: var(--size-10x);
	}

	@keyframes pulse-shadow {
		0% {
			box-shadow: 1px 1px 1px rgba(255, 255, 255, .1);
		}
		100% {
			box-shadow: 1px 1px 1px 10px rgba(255, 255, 255, .01);
		}
	}
}

`;
