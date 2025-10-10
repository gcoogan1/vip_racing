import HeroSection from "../../components/heroSection/heroSection";
import Lamborghini from "../../assets/hero/Lamborghini.jpg";
import ChannelCard from "../../components/cards/channelCard/channelCard";
import { useYouTubeStreams } from "../../util/hooks/useYoutubeStreams";
import { streamers } from "../../util/data/streamers/streamers";
import { drivers } from "../../util/data/drivers/drivers";
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
              <SectionTitle>Drivers Channels</SectionTitle>
              <SectionList>
                {drivers.map((driver) => {
                  if (driver.socials && driver.socials.youtube) {
                    return (
                      <div style={{ width: "228px" }}>
                        <ChannelCard
                        key={driver.name}
                        name={driver.name}
                        username={driver.socials.youtube.username}
                        url={driver.socials.youtube.url}
                        cardImg={driver.cardImg}
                      />
                      </div>
                    );
                  }
                  return null;
                })}
              </SectionList>
            </Section>
            <Section>
              <SectionTitle>Drivers Channels</SectionTitle>
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
              <SectionTitle>Drivers Channels</SectionTitle>
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
