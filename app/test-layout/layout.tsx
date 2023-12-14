/*"use client";

// All games need access to the game settings, so we wrap them in a context provider
import { createContext, useContext, useEffect, useState } from "react";
import { cookies } from "next/headers";

const SettingsContext = createContext<any>({});

export const useSettings = () => useContext(SettingsContext);

// The default settings are defined here
// Currently all the settings are strings so we can store them in a cookie
// But it might make more sense to store them all in one string
// and use JSON.parse and JSON.stringify to convert them to and from an object
function getSettings() {
  const cookieStore = cookies();
  const game = cookieStore.get("game");
  const play = cookieStore.get("play");
  if (game && play) {
    return { game, play };
  } else {
    const defaultSettings = { game: "kuhn", play: "true" };
    cookieStore.set("game", defaultSettings.game);
    cookieStore.set("play", defaultSettings.play);
    return defaultSettings;
  }
}  */

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const currentSettings = getSettings();

  // const [settings, setSettings] = useState(currentSettings);

  return (
    //   <SettingsContext.Provider value={{ settings, setSettings }}>
    { children }
    //   </SettingsContext.Provider>
  );
}
