import { shallowMount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("NavBar.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(NavBar, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
