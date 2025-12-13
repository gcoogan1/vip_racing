export type SettingField = {
  key: string;
  label: string;
};

export type SettingSection = {
  section: string;
  label: string;
  fields: SettingField[];
};

export type RaceSettings = {
  id: number;
  data: RaceSettingsConfig;
}

export const raceSettingsSchema: SettingSection[] = [
  {
    section: "timeWeatherSettings",
    label: "Time/Weather Settings",
    fields: [
      { key: "weatherSelectionMethod", label: "Weather Selection Method" },
      { key: "presetWeather", label: "Preset Weather" },
      { key: "equalConditionsMode", label: "Equal Conditions Mode" },
      { key: "timeOfDay", label: "Time of the Day" },
      { key: "variableTimeSpeedRate", label: "Variable Time Speed Rate" },
      { key: "customWeather", label: "Custom Weather" }
    ]
  },

  {
    section: "qualifierSettings",
    label: "Qualifier Settings",
    fields: [
      { key: "timeLimit", label: "Time Limit" },
      { key: "qualifyingContTime", label: "Qualifying Continuation Time" },
      { key: "tireWearRate", label: "Tire Wear Rate (Qualifier)" },
      { key: "fuelConsumptionRate", label: "Fuel Consumption Rate (Qualifier)" },
      { key: "initialFuel", label: "Initial Fuel" },
    ]
  },

  {
    section: "raceSettings",
    label: "Race Settings",
    fields: [
      { key: "startType", label: "Start Type" },
      { key: "gridOrder", label: "Grid Order" },
      { key: "bop", label: "BoP/Tuning Prohibited" },
      { key: "settingOptions", label: "Settings Options" },
      { key: "boost", label: "Boost" },
      { key: "slipstreamStrength", label: "Slipstream Strength" },
      { key: "visibleDamge", label: "Visible Damage" },
      { key: "mechanicalDamage", label: "Mechanical Damage" },
      { key: "tireWearRate", label: "Tire Wear Rate" },
      { key: "fuelConsumptionRate", label: "Fuel Consumption Rate" },
      { key: "refuelingSpeed", label: "Refueling Speed" },
      { key: "initialFuel", label: "Initial Fuel" },
      { key: "gripRedOffTrack", label: "Grip Reduction Off Track" },
      { key: "raceFinishDelay", label: "Race Finish Delay" },
      { key: "nitroOvertake", label: "Nitro / Overtaking System Usage Multiplier" }
    ]
  },

  {
    section: "regulationSettings",
    label: "Regulation Settings",
    fields: [
      { key: "filterByCategory", label: "Filter by Category" },
      { key: "ppLimit", label: "PP Limit" },
      { key: "maxPowerOutput", label: "Max. Power Output" },
      { key: "minWeight", label: "Minimum Weight" },
      { key: "usableTire", label: "Usable Tires" },
      { key: "usableTireTypes", label: "Usable Tire & Types" },
      { key: "requiredTireType", label: "Required Tire Type" },
      { key: "nitro", label: "Nitrous" },
      { key: "kartUsage", label: "Kart Usage" },
      { key: "engineSwap", label: "Engine Swap" },
      { key: "tuningParts", label: "Tuning Parts" }
    ]
  },

  {
    section: "penaltySettings",
    label: "Penalty Settings",
    fields: [
      { key: "shortCut", label: "Shortcut Penalty" },
      { key: "wallCollision", label: "Wall Collision Penalty" },
      { key: "correctVehicleCourse", label: "Correct Vehicle Course After Wall Collision" },
      { key: "carCollision", label: "Car Collision Penalty" },
      { key: "pitLane", label: "Pit Lane Cutting Penalty" },
      { key: "ghosting", label: "Ghosting During Race" },
      { key: "flagRules", label: "Flag Rules" }
    ]
  },

  {
    section: "limitDrivingOptions",
    label: "Limit Driving Options",
    fields: [
      { key: "countersteeringAssistance", label: "Countersteering Assistance" },
      { key: "asm", label: "Active Stability Management (ASM)" },
      { key: "drivingLineAssist", label: "Driving Line Assist" },
      { key: "tractionControl", label: "Traction Control" },
      { key: "abs", label: "ABS" },
      { key: "autoDrive", label: "Auto Drive" }
    ]
  }
] as const;


export type RaceSettingsConfig = {
  timeWeatherSettings: {
    weatherSelectionMethod: string;
    presetWeather: string;
    equalConditionsMode: string;
    timeOfDay: string;
    variableTimeSpeedRate: string;
    customWeather: string;
  };

  qualifierSettings: {
    timeLimit: string;
    qualifyingContTime: string;
    fuelConsumptionRate: string;
    initialFuel: string;
    tireWearRate: string;
  };

  raceSettings: {
    startType: string;
    gridOrder: string;
    bop: string;
    settingOptions: string;
    boost: string;
    slipstreamStrength: string;
    visibleDamge: string;
    mechanicalDamage: string;
    tireWearRate: string;
    fuelConsumptionRate: string;
    refuelingSpeed: string;
    initialFuel: string;
    gripRedOffTrack: string;
    raceFinishDelay: string;
    nitroOvertake: string;
  };

  regulationSettings: {
    filterByCategory: string;
    ppLimit: string;
    maxPowerOutput: string;
    minWeight: string;
    usableTire: string;
    usableTireTypes: string;
    requiredTireType: string;
    nitro: string;
    kartUsage: string;
    engineSwap: string;
    tuningParts: string;
  };

  penaltySettings: {
    shortCut: string;
    wallCollision: string;
    correctVehicleCourse: string;
    carCollision: string;
    pitLane: string;
    ghosting: string;
    flagRules: string;
  };

  limitDrivingOptions: {
    countersteeringAssistance: string;
    asm: string;
    drivingLineAssist: string;
    tractionControl: string;
    abs: string;
    autoDrive: string;
  };
};
