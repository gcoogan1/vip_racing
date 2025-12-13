import {
  RulesContent,
  RulesHeader,
  RulesList,
  RulesListItem,
  RulesSection,
  RulesSpanBold,
  RulesSpanLarge,
  RulesSubtitle,
  RulesTabContainer,
  RulesText,
  RulesTitle,
} from "./rulesTab.styles";

const RulesTab = () => {
  return (
    <RulesTabContainer>
      <RulesHeader>
        <RulesTitle>The 2026 VIP GT3 CHAMPIONSHIP</RulesTitle>
        <RulesSubtitle>Rules & Regulations</RulesSubtitle>
      </RulesHeader>
      <RulesContent>
        <RulesSection>
          <RulesSpanLarge>Season Overview</RulesSpanLarge>
          <br />
          <RulesText>
            The 2026 season of the VIP Formula 1 League is a competitive
            F1-style championship held in Gran Turismo 7, featuring multiple
            drivers divided into teams. The season consists of multiple rounds,
            each hosted on a different international circuit. Drivers will
            compete for both Drivers’ and Teams’ Championships.
          </RulesText>
        </RulesSection>
        <RulesSection>
          <RulesSpanLarge>1. League Structure</RulesSpanLarge>
          <br />
          <RulesSpanBold>1.1 About the League</RulesSpanBold>
          <RulesList>
            <RulesListItem>
              The “League” is an annual event called “VIP Formula 1 League” and
              this is its first iteration, named the “2026 Season”.
            </RulesListItem>
            <RulesListItem>
              The League is hosted by the “Victory In Performance Racing Team”
              on Gran Turismo 7.
            </RulesListItem>
            <RulesListItem>
              All final rules and regulations are governed by the “League
              Director”, which for this season is “VIP_AlmostPodium”.
            </RulesListItem>
          </RulesList>
          <br />
          <RulesSpanBold>1.2 Teams & Drivers</RulesSpanBold>
          <RulesList>
            <RulesListItem>
              There will be a total of 16 drivers competing in the league for
              this season.
            </RulesListItem>
            <RulesListItem>
              All drivers will be divided into 8 teams of two that will
              participate in a single “split”, which is a single “Room” in the
              Gran Turismo 7 Multiplayer Lobby.
            </RulesListItem>
            <RulesListItem>
              The drivers and teams will be selected personally to participate
              by an exclusive invite.
            </RulesListItem>
            <RulesListItem>
              Reserve drivers must be selected prior to the start of the season
              with approval from the League Director.
            </RulesListItem>
            <RulesListItem>
              Drivers can be removed and replaced from the league at any point
              before, during, or after the season under the discretion of the
              League Director.
            </RulesListItem>
            <RulesListItem>
              Drivers that replace an existing driver do not inherit their
              points.
            </RulesListItem>
          </RulesList>
          <br />
          <RulesSpanBold>2.3 Season Format</RulesSpanBold>
          <RulesList>
            <RulesListItem>
              A “round” is a session of “Free Practice”, “Qualifying”, and
              “Race”.
            </RulesListItem>
            <RulesListItem>
              This season will consist of a total of 5 rounds, each taking place
              in a different real-world F1-graded track.
            </RulesListItem>
          </RulesList>
          <br />
        </RulesSection>
        <RulesSection>
          <RulesSpanLarge>2. Points System</RulesSpanLarge>
          <br />
          <RulesSpanBold>2.1 Drivers' Championship Points</RulesSpanBold>
          <RulesList>
            <RulesListItem>
              Points are awarded to drivers based on their finishing position in
              each race.
            </RulesListItem>
          </RulesList>
          <br />
        </RulesSection>
      </RulesContent>
    </RulesTabContainer>
  );
};

export default RulesTab;
