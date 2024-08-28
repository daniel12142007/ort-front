export type Page = "constructor" | "testing" | "user";

export interface SideBarProps {
  selected: Page;
  onSelect: (page: Page) => void;
}

export interface NavItem {
  label: string;
  icon: string;
  value: Page;
  path: string;
}
