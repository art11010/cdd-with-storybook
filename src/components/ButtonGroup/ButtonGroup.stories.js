// story 파일을 만들면 스토리에 사용할 컴포넌트를 가져온다.
import ButtonGroup from './ButtonGroup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Wanted/MyButton',
  component: ButtonGroup,
  tags: ['autodocs'],
};

export const DefaultGroup = {
  args: {
    primary: true,
    label: 'Button',
  },
};
