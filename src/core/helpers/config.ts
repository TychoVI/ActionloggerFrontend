import { computed } from "vue";
import defaultLayoutConfig from "@/core/config/DefaultLayoutConfig";

/**
 * Returns layout config
 * @returns {object}
 */
export const config = computed(() => {
  return defaultLayoutConfig;
});

// /**
//  * Set the sidebar display
//  * @returns {boolean}
//  */
// export const displaySidebar = computed(() => {
//   return store.getters.layoutConfig("sidebar.display");
// });

/**
 * Check if footer container is fluid
 * @returns {boolean}
 */
export const footerWidthFluid = computed(() => {
  return defaultLayoutConfig.footer.width === "fluid";
});

/**
 * Check if header container is fluid
 * @returns {boolean}
 */
export const headerWidthFluid = computed(() => {
  return defaultLayoutConfig.header.width === "fluid";
});

// /**
//  * Returns header left part type
//  * @returns {string}
//  */
// export const headerLeft = computed(() => {
//   return store.getters.layoutConfig("header.left");
// });

/**
 * Set the aside display
 * @returns {boolean}
 */
export const asideDisplay = computed(() => {
  return defaultLayoutConfig.aside.display === true;
});

/**
 * Check if toolbar width is fluid
 * @returns {boolean}
 */
export const toolbarWidthFluid = computed(() => {
  return defaultLayoutConfig.toolbar.width === "fluid";
});

/**
 * Set the toolbar display
 * @returns {boolean}
 */
export const toolbarDisplay = computed(() => {
  return defaultLayoutConfig.toolbar.display;
});

/**
 * Check if the page loader is enabled
 * @returns {boolean}
 */
export const loaderEnabled = computed(() => {
  return defaultLayoutConfig.loader.display;
});

/**
 * Check if container width is fluid
 * @returns {boolean}
 */
export const contentWidthFluid = computed(() => {
  return defaultLayoutConfig.content.width === "fluid";
});

/**
 * Page loader logo image
 * @returns {string}
 */
export const loaderLogo = computed(() => {
  return process.env.BASE_URL + defaultLayoutConfig.loader.logo;
});

/**
 * Check if the aside menu is enabled
 * @returns {boolean}
 */
export const asideEnabled = computed(() => {
  return !!defaultLayoutConfig.aside.display;
});

/**
 * Set the aside theme
 * @returns {string}
 */
export const asideTheme = computed(() => {
  return defaultLayoutConfig.aside.theme;
});

/**
 * Set the subheader display
 * @returns {boolean}
 */
export const subheaderDisplay = computed(() => {
  return defaultLayoutConfig.toolbar.display;
});

/**
 * Set the aside menu icon type
 * @returns {string}
 */
export const asideMenuIcons = computed(() => {
  return defaultLayoutConfig.aside.menuIcon;
});

/**
 * Light theme logo image
 * @returns {string}
 */
export const themeLightLogo = computed(() => {
  return defaultLayoutConfig.main.logo.light;
});

/**
 * Dark theme logo image
 * @returns {string}
 */
export const themeDarkLogo = computed(() => {
  return defaultLayoutConfig.main.logo.dark;
});

/**
 * Set the header menu icon type
 * @returns {string}
 */
export const headerMenuIcons = computed(() => {
  return defaultLayoutConfig.header.menuIcon;
});

/**
 * Illustrations set
 * @returns {string}
 */
export const illustrationsSet = computed(() => {
  return defaultLayoutConfig.illustrations.set;
});
