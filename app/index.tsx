import { initDatabase } from "@/src/db/database";
import AppNavigation from "@/src/navigation/AppNavigation";
import { useEffect } from "react";

export default function Index() {

  useEffect(() => {
    initDatabase(); // init une seule fois au démarrage
  }, []);

  return (
    <AppNavigation />
  );
}
