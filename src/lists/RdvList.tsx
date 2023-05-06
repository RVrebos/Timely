import React, { useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { Rdv } from "../types/Rdv";
import { RdvItemList } from "../item/RdvItemList";
import { getRdv } from "../api/getRdv";

export const RdvList: React.FC = () => {
  const [rdvs, setRdvs] = useState<Rdv[]>(getRdv);
  
  const renderItem: ListRenderItem<Rdv> = ({ item }) => {
    return <RdvItemList rdv={item} />;
  };
  
  return (
    <View style={styles.container}>
      <FlatList data={rdvs} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
