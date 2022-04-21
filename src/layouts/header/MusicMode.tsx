import { useState } from "react";
// Mantine
import { ActionIcon } from "@mantine/core";
// Motion
import { AnimatePresence, motion } from "framer-motion";
// Icons
import { PlayerPlay, PlayerPause } from "tabler-icons-react";
// sounds
import useSound from "use-sound";
// mp3
import Chill from "/src/assets/sounds/chill.mp3?url";

// ------------------------------------------------------------

export default function MusicMode() {
  const [playMode, setPlayMode] = useState(true);

  // sound effects on click
  const [play, { stop }] = useSound(Chill);

  const handleClick = () => {
    // check the playMode value to play to stop the music
    playMode ? play() : stop();
    setPlayMode(!playMode);
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={playMode.toString()}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ActionIcon
          size="xl"
          onClick={handleClick}
          variant="filled"
          radius="xl"
        >
          {playMode === true ? <PlayerPlay size={24} /> : <PlayerPause />}
        </ActionIcon>
      </motion.div>
    </AnimatePresence>
  );
}
