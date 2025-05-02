import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import dbconnect from "@/lib/dbconnect";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { scope: "read:user user:email" } }, // Ensure email access
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({ user, profile, account }) {
      try {
        await dbconnect();

        const email = profile?.email || user?.email;
        const name = profile?.name || user?.name;
        const picture = profile?.picture || user?.image;
        const emailVerified = profile?.email_verified ?? true;

        if (!email) {
          console.error("No email returned from provider");
          return false;
        }

        let dbUser = await User.findOne({ email });

        if (!dbUser) {
          dbUser = await User.create({
            name,
            email,
            profilePicture: picture,
            isVerified: emailVerified,
          });
        }

        user.id = dbUser._id.toString();
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 90 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/user-auth", // Custom sign-in page path
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
