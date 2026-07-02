import { useAppSelector } from "../../../store/hooks";

function PlayedTrack_UI(){

    const currentTrackId = useAppSelector(
        (state) => state.player.currentTrackId
    );
    const tracks = useAppSelector(
        (state) => state.tracks.tracks
    );

    const currentTrack = tracks.find((t) => t.id == currentTrackId)

    const artist = useAppSelector(
        (state) => state.artists.artists.find((a) => a.id == currentTrack?.artist_id)
    )

    return(
        <article>

            <div>
                <img src={currentTrack?.image} />
            </div>

            <div>
                
                <p>
                    {currentTrack?.title}
                </p>

                <p>
                    {artist?.name}
                </p>

            </div>

        </article>
    )
}

export default PlayedTrack_UI