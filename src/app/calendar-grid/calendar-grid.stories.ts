import { MatCheckboxModule } from '@angular/material/checkbox';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CalendarGridComponent } from './calendar-grid.component';
import { MatGridListModule } from '@angular/material/grid-list';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<CalendarGridComponent> = {
  title: 'Example/CalendarGridComponent',
  component: CalendarGridComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatGridListModule],
    })
  ],
  tags: ['autodocs'],
  render: (args: CalendarGridComponent) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;
type Story = StoryObj<CalendarGridComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const AllEvent: Story = {
  args: {
    events: [
      {
        id: 1,
        type: 'instructor',
        title: 'Instructor Event 1',
        description: 'Instructor Description',
        startDate: new Date('2023/10/24'),
        endDate: new Date('2023/10/26')
      },
      {
        id: 2,
        type: 'evaluator',
        title: 'Evaluator Event 1',
        description: 'Evaluator Description',
        startDate: new Date('2023/10/02'),
        endDate: new Date('2023/10/02')
      },
      {
        id: 3,
        type: 'FTI',
        title: 'FTI Event 1',
        description: 'FTI Description',
        startDate: new Date('2023/10/05'),
        endDate: new Date('2023/10/08')
      },
      {
        id: 3,
        type: 'Draft',
        title: 'Draft Event 1',
        description: 'Draft Description',
        startDate: new Date('2023/10/02'),
        endDate: new Date('2023/10/09')
      }
    ]
  },
};
