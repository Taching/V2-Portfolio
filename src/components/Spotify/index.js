import React from "react"
import API from "../../../utils/API"
import Loading from "@components/Loading"
import {
  SpotifyStyle,
  // LastFmLogo,
  Toptext,
  Player,
  // RepeatIcon,
} from "./style.js"
import SpotifyIcon from "../../Icons/Spotify"
// import LastFm from "../../Icons/Lastfm"
// import Repeat from "../../Icons/Repeat"
class Spotify extends React.Component {
  state = {
    isLoading: true,
    songList: [],
    imageList: []
  }
  async componentDidMount() {
    try {
      let musicData = await API.get()
      musicData = musicData.data.recenttracks.track
      console.log(musicData)
      // if (musicData[0]["@attr"].nowplaying == undefined) {
      //   console.log("yes its playing")
      // } else {
      //   console.log("no its not playing")
      // }
      this.setState({ songList: musicData, isLoading: false })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { songList, isLoading } = this.state
    return (
      <SpotifyStyle>
        {isLoading ? <Loading isLoading /> : null}
        <Toptext>
          <a href="https://open.spotify.com/user/tachingers?si=NSdCKhY9S8OKpCMs-i7O1g">
            <p>song that I cant live without this month</p>
            <p>On Repeat in</p>
            <SpotifyIcon width="25px" height="25px" />
          </a>
        </Toptext>
        {songList.slice(0, 5).map((song, index) => (
          <Player key={index}>
            <ul>
              <li>
                <img alt="coveralbum" src={JSON.parse(JSON.stringify(song.image[1]["#text"]))}></img>
              </li>
              <li>
                <a href={song.url}>{song.name}</a>
                <p>{song.artist["#text"]}</p>
              </li>
              <li>
                <h4>X</h4>
              </li>
              <li>
                <p>{song.album["#text"]}</p>
              </li>
            </ul>
          </Player>
        ))}
      </SpotifyStyle>
    )
  }
}

export default Spotify
