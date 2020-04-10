import { Navbar, UserSession } from "../Components/Navbar";
import { SafeAreaView, ScrollView } from "react-native";

import Ad from "../Components/Ad";
import Body from "../Components/Body";
import COLORS from "../constants/colors.json";
import Menu from "../Components/Menu";
import ProductList from "../Components/ProductList";
import React from "react";
import Search from "../Components/Search";
import UsersList from "../Components/UsersList";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.background.main }}>
      <Navbar />
      <UserSession />
      <Menu />
      <Search />
      <ScrollView>
        <Ad />
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
}
