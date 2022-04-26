import VueApexCharts from "vue3-apexcharts";
import type {App} from "vue";

/**
 * Initialize VueApexChart component
 * @param app vue instance
 */
export function initApexCharts(app: App<Element>) {
  app.use(VueApexCharts);
}
