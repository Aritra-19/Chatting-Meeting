import NextAuth from "next-auth" // Import NextAuth for authentication
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import dbconnect from "@/lib/dbconnect"; // Import the database connection function
import User from "@/models/User"; // Import the User model

export const authOptions = {
  // Configure one or more authentication providers
  //which provider to use for authentication, Github and Google are used in this case
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
  ],
  callbacks: {
    async jwt({ token, user ,account }) {
      console.log('this is the token',token);
      console.log('this is the user',user);
      console.log('this is the account',account);

      if(user) {
        token.id = user.id; // Add user ID to the token
      }
      if(account) {
        token.accessToken = account.access_token; // Add access token to the JWT token
      }
      return token; // Return the modified token
    },
    async session({ session, token}) {
      // Send properties to the client, like an access_token from a provider. Session contains name, email, picture
      session.accessToken = token.accessToken
      return session
    },
    async signIn({ user, profile }) {
      await dbconnect(); // Connect to the database
      let dbUser = await User.findOne({ email: profile.email }); // Check if user exists in the database
      //if user does not exist, create a new user
      if (!dbUser) {
        dbUser = await User.create({
          name: profile.name,
          email: profile.email,
          profilePicture: profile.picture,
          isVerified: profile.email_verified ? true : false, // Check if email is verified
        });
      }
      user.id = dbUser._id.toString(); // Set user ID to the database user ID
      return true; // Allow sign-in
    }
  },
  session: {
    strategy: "jwt", // Use JWT for session management
    maxAge: 90 * 24 * 60 * 60, // Set session expiration to 90 days
  },
  pages: {
    signIn: 'user-auth', // Custom sign-in page
  }
}
const handler = NextAuth(authOptions); // Create the NextAuth handler
export { handler as GET, handler as POST }; // Export the handler for GET and POST requests