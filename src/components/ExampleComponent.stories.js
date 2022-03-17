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
