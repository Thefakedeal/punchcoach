import React from "react";
import { ScrollView } from "react-native";
import FullScreen from "../components/FullScreen";
import DeveloperInfo from "../components/DeveloperInfo";
import PunchDescription from "../components/PunchDescription";

export default function InfoPage() {
  return (
    <FullScreen>
      <ScrollView>
        <PunchDescription />
        <DeveloperInfo />
      </ScrollView>
    </FullScreen>
  );
}
