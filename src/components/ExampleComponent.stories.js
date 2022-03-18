import React from "react";

import { ExampleComponent } from "./ExampleComponent";

export default {
  component: ExampleComponent,
  title: "ExampleComponent",
};

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  secret: process.env.EXAMPLEVAR,
  anotherSecret: process.env.ANOTHERVAR,
};

console.log(process.env.STORYBOOK_BOPO);
export const WithEnvVarFromFile = Template.bind({});
WithEnvVarFromFile.args = {
  secret: process.env.EXAMPLEVAR,
  anotherSecret: process.env.STORYBOOK_BOPO
    ? process.env.STORYBOOK_BOPO
    : "NOT BOPO",
};

// no longer needed as the object is being merged
/* console.log(process.env.BOPO);
export const WithEnVarsLoadedFromBothSources = Template.bind({});
WithEnVarsLoadedFromBothSources.args = {
  secret: process.env.EXAMPLEVAR,
  anotherSecret: process.env.BOPO,
}; */
