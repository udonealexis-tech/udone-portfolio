01 - Create your project

npm create vite@latest my-project
cd my-project

02 - Install Tailwind CSS

npm install tailwindcss @tailwindcss/vite

03 - Configure the Vite plugin

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

04 - Import Tailwind CSS

@import "tailwindcss";

05 - Start using Tailwind in your HTML

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

06 - Dark mode : tailWindCSS

Toggling dark mode manually : 

@custom-variant dark (&:where(.dark, .dark *));

body {
    font-family: 'Inter', sans-serif;
}

.dark {
    color-scheme: dark;
}

html {
    scroll-behavior: smooth;
}

HTML : 

<html class="dark">
  <body>
    <div class="bg-white dark:bg-black">
      <!-- ... -->
    </div>
  </body>
</html>


/* ------------- INSTALL DEPENDENCES -------- */

1 - AOS : npm i aos

2 - Lucide-react : npm i lucide-react

3 - React-Icons : npm i react-icons


