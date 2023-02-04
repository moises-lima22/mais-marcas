import BaseInput from "@/modules/core/components/Inputs/BaseInput.vue";
import BaseDropdown from "@/modules/core/components/BaseDropdown.vue";
import Card from "@/modules/core/components/Cards/Card.vue";
import Modal from "@/modules/core/components/Modal.vue";
import StatsCard from "@/modules/core/components/Cards/StatsCard.vue";
import BaseButton from "@/modules/core/components/BaseButton.vue";
import Badge from "@/modules/core/components/Badge.vue";
import BaseCheckbox from "@/modules/core/components/Inputs/BaseCheckbox.vue";
import BaseRadio from "@/modules/core/components/Inputs/BaseRadio";
import BaseProgress from "@/modules/core/components/BaseProgress";
import BasePagination from "@/modules/core/components/BasePagination";
import BaseAlert from "@/modules/core/components/BaseAlert";
import BaseNav from "@/modules/core/components/Navbar/BaseNav";
import BaseHeader from "@/modules/core/components/BaseHeader";
import AutoComplete from "@/modules/core/components/AutoComplete";
import ChipButton from "@/modules/core/components/ChipButton";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { Input, Tooltip, Popover } from "element-ui";
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component(AutoComplete.name, AutoComplete);
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(Card.name, Card);
    Vue.component(Modal.name, Modal);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(ChipButton.name, ChipButton);
    Vue.component(Input.name, Input);
    Vue.component("validation-provider", ValidationProvider);
    Vue.component("validation-observer", ValidationObserver);
    Vue.use(Tooltip);
    Vue.use(Popover);
  },
};

export default GlobalComponents;
