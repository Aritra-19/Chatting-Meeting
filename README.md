# 🎥 Chatting-Meeting

A modern, full-featured video conferencing web application built with **Next.js 15**, inspired by Google Meet. Create instant meetings, schedule calls, and connect with anyone — securely and effortlessly.

---

## ✨ Features

- 🔐 **OAuth Authentication** — Sign in with Google or GitHub via NextAuth.js
- 📹 **HD Video Meetings** — Powered by ZegoCloud's UIKit Prebuilt
- 🔗 **Instant & Scheduled Meetings** — Generate shareable meeting links in one click
- 🖥️ **Screen Sharing** — Share your screen with all participants
- 💬 **In-Meeting Chat** — Real-time messaging during calls
- 🌙 **Dark / Light Mode** — Full theme support via `next-themes`
- 📋 **Copy Meeting Link** — One-click clipboard copy
- 🔒 **Secure by Default** — End-to-end encrypted meetings
- 📱 **Responsive Design** — Works on desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Auth | [NextAuth.js v4](https://next-auth.js.org/) |
| Database | [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) |
| Video SDK | [ZegoCloud UIKit Prebuilt](https://www.zegocloud.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.18.0`
- A MongoDB database (local or [Atlas](https://www.mongodb.com/atlas))
- Google OAuth credentials ([Google Cloud Console](https://console.cloud.google.com/))
- GitHub OAuth App ([GitHub Developer Settings](https://github.com/settings/developers))
- ZegoCloud account ([ZegoCloud Console](https://console.zegocloud.com/))

### 1. Clone the repository

```bash
git clone https://github.com/Aritra-19/Chatting-Meeting.git
cd chatting-meeting
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
# App
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_CALLBACK_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# MongoDB
MONGODB_URI=mongodb+srv://your_connection_string

# ZegoCloud
NEXT_PUBLIC_ZEGOAPP_ID=your_zego_app_id
NEXT_PUBLIC_ZEGO_SERVER_SECRET=your_zego_server_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/   # NextAuth route handler
│   ├── components/               # Shared UI components
│   │   ├── Header.jsx            # Navigation + user menu
│   │   ├── Loader.jsx            # Full-screen loading spinner
│   │   ├── MeetingAction.jsx     # Create / join meeting controls
│   │   └── MeetingFeature.jsx    # Feature carousel
│   ├── privacy-policy/           # Privacy policy page
│   ├── terms-and-conditions/     # Terms & conditions page
│   ├── user-auth/                # Login page
│   ├── video-meeting/[roomid]/   # Meeting room (dynamic route)
│   ├── layout.js                 # Root layout (SSR)
│   ├── page.js                   # Home page
│   └── Provider.js               # Client-side providers
├── components/ui/                # shadcn/ui components
├── lib/
│   ├── dbconnect.js              # MongoDB connection helper
│   └── utils.js                  # Tailwind class utility
└── models/
    └── User.js                   # Mongoose User schema
```

---

## 🔑 Key Pages

| Route | Description |
|---|---|
| `/` | Home — create or join a meeting |
| `/user-auth` | Login with Google or GitHub |
| `/video-meeting/[roomid]` | Live meeting room |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms & conditions |

---

## 🏗️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🔒 Authentication Flow

1. User visits `/user-auth` and signs in with Google or GitHub
2. NextAuth handles the OAuth callback and creates/updates a user record in MongoDB
3. A JWT session is issued (valid for 90 days)
4. Protected routes redirect unauthenticated users to `/user-auth`

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

Have questions or feedback? Reach out via the [Help Center](https://chatting-meeting.com/help) or open a GitHub issue.

---

<p align="center">Made with ❤️ using Next.js & ZegoCloud</p>