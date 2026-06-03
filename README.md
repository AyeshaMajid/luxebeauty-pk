# LuxeBeauty PK — Premium Salon Ranking Network

Pakistan's luxury beauty & salon discovery platform.

## Project Structure

```
luxebeauty-pk/
├── index.html          ← Homepage
├── vercel.json         ← Vercel deployment config
├── css/
│   ├── style.css       ← Global styles
│   └── detail.css      ← Salon detail page styles
├── js/
│   └── main.js         ← Main JavaScript
└── pages/
    └── salon-detail.html  ← Salon detail page
```

## Deploy on Vercel (Recommended — Free)

1. Go to https://vercel.com and sign up (free)
2. Click **"Add New Project"**
3. Click **"Upload"** tab
4. Drag & drop the `luxebeauty-pk` folder
5. Click **Deploy** — done! Your site is live in ~30 seconds

## Deploy on cPanel / Shared Hosting

1. Log in to your cPanel
2. Open **File Manager** → navigate to `public_html`
3. Upload all files keeping the folder structure intact
4. Your site is live at your domain

## Deploy on Netlify (Free Alternative)

1. Go to https://netlify.com
2. Drag & drop the `luxebeauty-pk` folder onto the Netlify dashboard
3. Live instantly with a free `.netlify.app` URL

## Customisation

- **Brand Name**: Search & replace `LuxeBeauty PK` across all files
- **WhatsApp Number**: Replace `923001234567` with your number in all files
- **Colors**: Edit CSS variables in `css/style.css` under `:root {}`
- **Salons Data**: Replace placeholder salon cards in `index.html`
- **Cities**: Update city grid in `index.html`

## Tech Stack

- Pure HTML5 + CSS3 + Vanilla JS
- No build tools required
- Fonts: Google Fonts (Cormorant Garamond + DM Sans)
- Zero dependencies — works on any static host
