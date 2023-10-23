import { MatCheckboxModule } from '@angular/material/checkbox';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CustomCheckboxComponent } from './custom-checkbox.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CustomCheckboxComponent> = {
  title: 'Example/CustomCheckboxComponent',
  component: CustomCheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatCheckboxModule],
    })
  ],
  tags: ['autodocs'],
  render: (args: CustomCheckboxComponent) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<CustomCheckboxComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Default: Story = {
  args: {
    isDisabled: false,
    label: 'Default checkbox'
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    label: 'Disabled checkbox'
  },
};
