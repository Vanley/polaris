import { AppProvider, Icon } from "@shopify/polaris";
import { CirclePlusMinor } from "@shopify/polaris-icons";

import translations from '@shopify/polaris/locales/en.json';

function Example() {
  return (
    <AppProvider i18n={translations}>
      <div
        style={{
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
  }}
      >
        <Icon source={CirclePlusMinor} accessibilityLabel="Circle plus icon" />
      </div>
    </AppProvider>
  );
}

export default Example;