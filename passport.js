import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());
