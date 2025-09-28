import {cardData} from "@/data/cardData.ts";
import {SongCard} from "./SongCard.tsx";

export const SongsListRecommended = () => {

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full py-10">
                <h1 className="flex w-full text-6xl text-800 justify-start mb-5">Recommended Songs</h1>
                <div className="flex flex-wrap gap-4">
                    {cardData.map((item, index) => (
                        <SongCard key={`${item.artist}-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
