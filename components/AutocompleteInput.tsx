import { Input, List, View } from "@ant-design/react-native";
import { InputProps } from "@ant-design/react-native/lib/input/PropsType";
import { forwardRef } from "react";
import { StyleSheet } from "react-native";

interface AutoCompleteInputProps extends InputProps {
  results: any[];
  resultValueKey: string;
  onResultPress?: (item: any) => void;
}

const AutocompleteInput = forwardRef<any, AutoCompleteInputProps>(
  (props, ref: any) => {
    const { results, resultValueKey, onResultPress } = props;
    return (
      <View style={styles.autocompleteContainer}>
        <Input
          {...props}
          ref={ref}
          style={styles.inputContainer}
          inputStyle={styles.inputText}
        />
        <View style={styles.listContainer}>
          <List style={styles.list}>
            {results.map((item: any, index: React.Key) => (
              <List.Item
                key={index}
                {...(onResultPress && {
                  onPress: () => onResultPress(item),
                })}
              >
                {item[resultValueKey]}
              </List.Item>
            ))}
          </List>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  autocompleteContainer: {
    padding: 10,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "white",
    position: "relative",
  },
  inputText: {
    padding: 10,
  },
  listContainer: {
    position: "relative",
  },
  list: {
    position: "absolute",
    zIndex: 2,
    top: "100%",
    width: "100%",
  },
});

export default AutocompleteInput;
