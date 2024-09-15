import { Alert, StyleSheet } from "react-native";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/redux";
import { clearSearchHistory } from "@/redux/search-history/actions";
import { Button, List, View } from "@ant-design/react-native";
import { ScrollView } from "react-native";

export default function HistoryScreen() {
  const dispatch = useAppDispatch();
  const searchHistory = useAppSelector(
    (state: RootState) => state.searchHistory.history
  );

  const handleClear = () => {
    Alert.alert("Clear history?", "All of your history will be lost.", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => dispatch(clearSearchHistory()) },
    ]);
  };

  return (
    <View style={styles.viewContainer}>
      <ScrollView>
        <List>
          {searchHistory.map((item: string, index: React.Key) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </ScrollView>
      <Button style={styles.clearButtonStyle} onPress={handleClear}>
        Clear All
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    padding: 10,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  clearButtonStyle: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
});
