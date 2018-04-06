import { expect } from 'chai';
import { shallow } from '@vue/test-utils';
import novncClient from '@/components/novnc-client.vue';

describe('novnc-client.vue', () => {
  it('renders props.name when passed', () => {
    const name = 'example desktop name';
    const wrapper = shallow(novncClient, {
      propsData: { name }
    });
    expect(wrapper.text()).to.include(name);
  });
});
