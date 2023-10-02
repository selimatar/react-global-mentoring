import React from "react";
import SortControl from "../components/SortControl/sortControl";

export default {
  title: "SortControl",
  component: SortControl,
  argTypes: {
    currentSelection: { control: 'select', options: ['release-date', 'title'] },
    onSelectionChange: { action: "selection changed" }
  },
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSelection: 'release-date',
  onSelectionChange: (newSortBy) => {
    console.log(`Selected sorting option: ${newSortBy}`);
  },
};

export const WithRelaseDate = Template.bind({});
WithRelaseDate.args = {
  currentSelection: 'release-date',
};