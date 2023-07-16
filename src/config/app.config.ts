interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Guest User'],
  tenantRoles: ['Player', 'Administrator', 'Coach', 'Support Staff'],
  tenantName: 'Organization',
  applicationName: 'vollyball',
  addOns: [],
};
