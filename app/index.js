import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Slot, useRouter } from "expo-router";
import { Text } from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs } from "../components/home/nearby/Nearbyjobs";
import { Popularjobs } from "../components/home/popular/Popularjobs";
import { ScreenHeaderBtn } from "../components/common/header/ScreenHeaderBtn";
import { Welcome } from "../components/home/welcome/Welcome";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Slot.Screen
         options={{
            headerStyle: {backgroundColor: COLORS.lightWhite},
         }}
      />
    </SafeAreaView>
  );
};


export default Home;
