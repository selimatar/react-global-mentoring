import React from "react";
import Counter from "../components/Counter/counter";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

// Story 1: Counter with initialCount set to 0
export const InitialCountZero = Template.bind({});
InitialCountZero.args = {
  initialCount: 0,
};

// Story 2: Counter with initialCount set to a custom value
export const InitialCountCustom = Template.bind({});
InitialCountCustom.args = {
  initialCount: 5,
};

// Story 3: Counter with initialCount set to a negative value
export const InitialCountNegative = Template.bind({});
InitialCountNegative.args = {
  initialCount: -2,
};