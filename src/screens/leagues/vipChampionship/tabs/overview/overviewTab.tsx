import VipOverview from "../../../../../assets/leagues/VipOverview.png";
import InfoChip from "../../../../../components/infoChip/infoChip";
import CategoryCard from "../../../../../components/sectionCards/categoryCard/categoryCard";
import FeatureCard from "../../../../../components/sectionCards/featureCard/featureCard";
import HondaRacing from "../../../../../assets/leagues/HondaRacing.png";
import SideBySide from "../../../../../assets/leagues/SideBySide.png";
import SubaruRacing from "../../../../../assets/leagues/SubaruRacing.png";
import LexusFerrari from "../../../../../assets/leagues/LexusFerrari.png";
import { vipChamCategories } from "../../../../../util/data/leagues/categories/vipChamCategories";
import {
  Banner,
  Details,
  Features,
  MemberName,
  MemberRole,
  Rules,
  RulesContent,
  RulesHeader,
  RulesList,
  RulesListDepartment,
  RulesListMember,
  RulesSubtitle,
  RulesTitle,
} from "./overviewTab.styles";

type RulesItem = {
  position: string;
  name: string;
};

type RuleDepartment = {
  department: string;
  members: RulesItem[];
};

const OverviewTab = () => {
  const rules: RuleDepartment[] = [
    {
      department: "Directors",
      members: [
        { position: "League Director", name: "VIP_AlmostPodium" },
        { position: "Race Director", name: "VIP_AlmostPodium" },
      ],
    },
    {
      department: "Stewards",
      members: [
        { position: "Lead Steward", name: "VIP_AlmostPodium" },
        { position: "Steward 1", name: "VIP_AlmostPodium" },
        { position: "Steward 2", name: "VIP_AlmostPodium" },
        { position: "Results Manager", name: "VIP_AlmostPodium" },
      ],
    },
    {
      department: "Managers",
      members: [
        { position: "Head of Promotions", name: "VIP_AlmostPodium" },
        { position: "Communications Manager", name: "VIP_AlmostPodium" },
        { position: "Broadcast Manager", name: "VIP_AlmostPodium" },
        { position: "Livery Manager", name: "VIP_AlmostPodium" },
        { position: "Lead Graphics", name: "VIP_AlmostPodium" },
      ],
    },
  ];

  return (
    <>
      <Banner src={VipOverview} alt="Banner Image" />
      <Features>
        <FeatureCard
          side={"right"}
          title={"Group 3 Unleashed"}
          info={
            "Fight through 8 unrelenting races in Group 3 cars inspired by real GT3 series. Make sure to pick your most flexible car to tackle any track."
          }
          imageSrc={HondaRacing}
          imgAlt={"Honda Racing"}
        />
        <FeatureCard
          side={"left"}
          title={"Strength in Numbers"}
          info={
            "Team up in a group of 3 and select one of the Gr.3 cars to fight with for the entire season. Earn points for yourself and your manufacturer to take the win."
          }
          imageSrc={SubaruRacing}
          imgAlt={"Subaru Racing"}
        />
        <FeatureCard
          side={"right"}
          title={"One Championship"}
          info={
            "All drivers compete in the same division, which is divided into 2 heats: Wednesday and Saturday. Each heat has 2 splits of 15 drivers that run consecutively."
          }
          imageSrc={LexusFerrari}
          imgAlt={"Lexus and Ferrari racing"}
        />
        <FeatureCard
          side={"left"}
          title={"Respectful Racing"}
          info={
            "Sportsmanship and respect among competitors is at the core of the league. Each race is governed by rules to ensure clean driving and fair penalties."
          }
          imageSrc={SideBySide}
          imgAlt={"Racing cars side by side in race"}
        />
      </Features>
      <Details>
        {vipChamCategories.map((category) => (
          <CategoryCard key={category.title} title={category.title}>
            {category.chips.map((chip) => (
              <InfoChip
                key={chip.category}
                rounds={chip.rounds}
                category={chip.category}
                description={chip.description}
              />
            ))}
          </CategoryCard>
        ))}
      </Details>
      <Rules>
        <RulesContent>
          <RulesHeader>
            <RulesTitle>League Staff</RulesTitle>
            <RulesSubtitle>
              Running this league is a team effort, and is not possible without
              the help of an entire group working together to create something
              we all enjoy.
            </RulesSubtitle>
          </RulesHeader>
          <RulesList>
            {rules.map((dept, index) => (
              <RulesListDepartment key={index}>
                {dept.members.map((member, idx) => (
                  <RulesListMember key={idx}>
                    <MemberRole>{member.position}</MemberRole>
                    <MemberName>{member.name}</MemberName>
                  </RulesListMember>
                ))}
              </RulesListDepartment>
            ))}
          </RulesList>
        </RulesContent>
      </Rules>
    </>
  );
};

export default OverviewTab;
