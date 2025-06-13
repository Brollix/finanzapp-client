console.log("🧭 PLATFORM:", Platform.OS);

import { Platform } from "react-native";

let supabase: typeof import("./supabase.native");

if (Platform.OS === "web") {
  supabase = require("./supabase.web");
} else {
  supabase = require("./supabase.native");
}

export const { supabase: client } = supabase;
export { client as supabase };
