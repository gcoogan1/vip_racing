import SocialLink from "../socialLink/socialLink"
import SocialYoutube from "../../assets/social/SocialYoutube.svg?react"
import { Video, VideoLinkContainer, VideoOverlayButton, VideoSubtitle, VideoTextContent, VideoTitle, VideoWrapper } from "./videoLink.styles"

type VideoLinkProps = {
  id: string;
  title: string;
  publishedAt: string;
  channelTitle: string;
  username?: string;
}

const VideoLink = ({ id, title, publishedAt, channelTitle, username }: VideoLinkProps) => {

  return (
    <VideoLinkContainer>
      <VideoWrapper>
        <Video
          src={`https://www.youtube.com/embed/${id}?controls=0&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          allowFullScreen
        ></Video>
        <VideoOverlayButton>
          <SocialLink href={`https://www.youtube.com/${username}/videos`} icon={<SocialYoutube width={16} height={16} />} label={`${username}`} />
        </VideoOverlayButton>
      </VideoWrapper>
      <VideoTextContent>
        <VideoTitle>{title}</VideoTitle>
        <VideoSubtitle>Streamed on {new Date(publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        })} by {channelTitle}</VideoSubtitle>
      </VideoTextContent>
    </VideoLinkContainer>
  )
}

export default VideoLink