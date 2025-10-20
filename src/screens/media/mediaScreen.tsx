import HeroSection from "../../components/heroSection/heroSection";
import Lamborghini from "../../assets/hero/Lamborghini.jpg";
import ChannelCard from "../../components/cards/channelCard/channelCard";
import { useYouTubeStreams } from "../../util/hooks/useYoutubeStreams";
import { streamers, type Streamer } from "../../util/data/streamers/streamers";
import { drivers, type Driver } from "../../util/data/drivers/drivers";
import {
  HeroTextContainer,
  HeroTextContent,
  Title,
  Subtitle,
  GallerySection,
  GalleryContent,
  ContentSections,
  Section,
  SectionTitle,
  SectionList,
  Photo,
} from "./mediaScreen.styles";
import VideoLink from "../../components/videoLink/videoLink";
import { mediaPhotos } from "../../util/data/mediaPhotos/mediaPhotos";

const MediaScreen = () => {
  const { videos, error } = useYouTubeStreams(streamers);

  const attachDriverInfo = (streamers: Streamer[], drivers: Driver[]) => {
    const driverMap = new Map(drivers.map((driver) => [driver.id, driver]));

    return streamers.map((streamer) => ({
      ...streamer,
      driver: streamer.id ? driverMap.get(streamer.id) : null,
    }));
  };

  const streamersWithDrivers = attachDriverInfo(streamers, drivers);

  if (error) {
    console.error("Error fetching YouTube streams:", error);
  }

  return (
    <>
      <HeroSection backgroundImage={Lamborghini}>
        <HeroTextContainer>
          <HeroTextContent>
            <Title>Media Gallery</Title>
            <Subtitle>
              Dive into our live streams and curated collection of thrilling
              moments, behind-the-scenes content, and community highlights. View
              epic moments from our races, or take look at the custom designed
              liveries from the artists in our team.
            </Subtitle>
          </HeroTextContent>
        </HeroTextContainer>
      </HeroSection>
      <GallerySection>
        <GalleryContent>
          <ContentSections>
            <Section>
              <SectionTitle>Driver Channels</SectionTitle>
              <SectionList>
                {streamersWithDrivers.map((streamer) => {
                  if (streamer.driver?.socials?.youtube && streamer.driver.cardImg) {
                    return (
                      <div style={{ width: "228px" }}>
                        <ChannelCard
                          key={streamer.id}
                          name={streamer.name}
                          username={streamer.username}
                          url={streamer.driver.socials.youtube.url}
                          cardImg={streamer.driver.cardImg}
                        />
                      </div>
                    );
                  }
                })}
              </SectionList>
            </Section>
            <Section>
              <SectionTitle>Latest Streams</SectionTitle>
              <SectionList>
                {videos.map((video) => (
                  <div style={{ width: "308px" }}>
                    <VideoLink
                      id={video.id}
                      title={video.title}
                      publishedAt={video.publishedAt}
                      channelTitle={video.channelTitle}
                      username={video.username}
                    />
                  </div>
                ))}
              </SectionList>
            </Section>
            <Section>
              <SectionTitle>Photos and Videos</SectionTitle>
              <SectionList>
                {mediaPhotos.map((photo, index) => (
                  <Photo
                    key={index}
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                  />
                ))}
              </SectionList>
            </Section>
          </ContentSections>
        </GalleryContent>
      </GallerySection>
    </>
  );
};

export default MediaScreen;
