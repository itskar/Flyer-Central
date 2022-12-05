import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],
      secret: process.env.JWT_SECRET,
      callbacks: {
        async session({ session, token }) {
          const firstName = session.user.name.split(" ")[0];
          const lastName = session.user.name.split(" ")[1];

          session.user.firstName = firstName;
          session.user.lastName = lastName;
          session.user.tag = firstName[0].toLowerCase() + lastName.toLowerCase();
          session.user.uid = token.sub;
          return session;
        },
      },
});