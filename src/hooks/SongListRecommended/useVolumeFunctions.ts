import {useState} from "react";


export const useVolumeFunctions = () => {
    const [volume, setVolume] = useState(1);

    const handleVolumeToggle = () => {
        setVolume(prevVolume => (prevVolume === 0 ? 1 : 0));
    }

    return {
        volume,
        handleVolumeToggle
    }
}
