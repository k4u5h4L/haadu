import ReactJkMusicPlayer from "react-jinke-music-player";

const Player = () => {
    return (
        <ReactJkMusicPlayer
            audioLists={[
                {
                    name: "Delicate",
                    singer: "Taylor Swift",
                    musicSrc:
                        "/home/k4u5h4l/mystuff/haadu/temp/Delicate - Taylor Swift.flac",
                    cover: "https://i.scdn.co/image/ab67616d00004851da5d5aeeabacacc1263c0f4b",
                    // cover: buffer
                },
            ]}
            autoPlay={false}
            mode="full"
        />
    );
};

export default Player;
