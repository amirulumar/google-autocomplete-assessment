import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInputChangeEventData,
} from "react-native";

import autocompleteJson from "@/assets/data/autocomplete.json";
import AutocompleteInput from "@/components/AutocompleteInput";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { RootState } from "@/redux";
import { fetchAutocomplete } from "@/redux/api/actions";
import { addSearchHistory } from "@/redux/search-history/actions";
import { View } from "@ant-design/react-native";
import debounce from "lodash.debounce";
import { useEffect, useRef, useState } from "react";

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector((state: RootState) => state.api);
  const [autocompleteInput, setAutocompleteInput] = useState<string>("");
  const [results, setResults] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const autocompleteInputRef = useRef(null);

  useEffect(() => {
    if (error || data?.predictions.length === 0) {
      setResults(autocompleteJson.predictions);
    }
  }, [data, error]);

  useEffect(() => {
    if (autocompleteInput) dispatch(fetchAutocomplete(autocompleteInput));
  }, [autocompleteInput]);

  const autoComplete = (query: string) => {
    setAutocompleteInput(query);
  };

  const debouncedAutoComplete = debounce(autoComplete, 1000);

  const onInputChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    debouncedAutoComplete(e.nativeEvent.text);
  };

  const onResultPress = (item: google.maps.places.AutocompletePrediction) => {
    setResults([]);
    dispatch(addSearchHistory(item.description));
  };

  return (
    <View style={styles.viewContainer}>
      <AutocompleteInput
        ref={autocompleteInputRef}
        placeholder="Search..."
        onChange={onInputChange}
        onResultPress={onResultPress}
        allowClear
        results={results}
        resultValueKey="description"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
