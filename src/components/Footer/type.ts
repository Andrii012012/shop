export type TItemMenu = { name: string; to: string };

export interface IMenuList {
  main: TItemMenu[];
  company: TItemMenu[];
  help: TItemMenu[];
  catalog: TItemMenu[];
  loyaltyProgram: TItemMenu[];
}
