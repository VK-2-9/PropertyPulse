import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/config/database";
import User from "@/modals/User";
export const authOptions = {
  providers: [
    GoogleProvider({
      ClientId: process.env.GOOGLE_CLIENT_ID,
      ClientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //invoked on successfull sign in
    async signIn({ profile }) {
      //connect to db
      await connectDB();
      //check if user exists
      const userExists = await User.findOne({ email: profile.email });
      //if not create user
      if (!userExists) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //return true to all sign in
      return true;
    },
    //session callback func that modifies session obj
    async session({ session }) {
      //get user from db
      const user=await User.findOne({email:session.user.email})
      // assign user id from session
      session.user.id=user._id.toString()
      // restrun session
      return session
    },
  },
};
