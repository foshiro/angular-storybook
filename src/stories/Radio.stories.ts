import { MatRadioModule } from '@angular/material/radio';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import Radio from './radio.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<Radio> = {
  title: 'Example/Radio',
  component: Radio,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatRadioModule],
    })
  ],
  tags: ['autodocs'],
  render: (args: Radio) => ({
    props: {
      ...args,
    },
  }),
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<Radio>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Checked: Story = {
  args: {
    options: [{
      value: 1,
      label: 'Option 1'
    }, {
      value: 2,
      label: 'Option 2'
    }],
  },
};

